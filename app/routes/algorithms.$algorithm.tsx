import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  json,
  ShouldRevalidateFunction,
  useLoaderData,
  useRouteError,
  useSearchParams,
} from "@remix-run/react";

import {
  SplitView,
  CodeViewer,
  VisualizationCanvas,
  StepsPanel,
} from "~/components";
import { AlgorithmData } from "~/types";
import { db } from "~/utils/db.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return data
    ? [{ title: `Data Structures Analyzer - ${data.algorithm.name}` }]
    : [{ title: "Data Structures Analyzer - Algorithm not found" }];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const algorithm = await db
    .collection<AlgorithmData>("algorithms")
    .findOne({ id: params.algorithm });

  if (!algorithm) {
    throw new Response("Algorithm not found", { status: 404 });
  }

  return json({ algorithm });
};

export default function AlgorithmRoute() {
  const { algorithm } = useLoaderData<typeof loader>();

  const [searchParams] = useSearchParams();
  const step = Number(searchParams.get("step"));

  return (
    <div className="relative flex w-full">
      <SplitView
        leftComponent={
          <div className="flex h-full flex-col">
            <div className="flex flex-col gap-2 border-b border-neutral-100 p-2 text-neutral-500">
              <h1 className="font-medium">{algorithm.name}</h1>
              <p className="text-xs font-light">{algorithm.description}</p>
            </div>

            <CodeViewer
              sourceCode={algorithm.sourceCode}
              currentLine={algorithm.steps[step].line}
            />
          </div>
        }
        rightComponent={
          <VisualizationCanvas
            key={algorithm.id}
            visualisationItems={algorithm.steps[step].visualisationItems}
          />
        }
      />
      <StepsPanel step={step} stepsCount={algorithm.steps.length} />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="grid w-full place-items-center text-sm text-neutral-500">
        {error.data}
      </div>
    );
  }
}

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams,
  nextParams,
}) => currentParams.algorithm !== nextParams.algorithm;
