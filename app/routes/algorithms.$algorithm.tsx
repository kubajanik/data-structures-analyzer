import React from "react";

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

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
    ? [{ title: `Data Structures Analyzer - ${data?.algorithm?.name ?? ""}` }]
    : [{ title: "Data Structures Analyzer - Algorithm Not Found" }];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const algorithm = await db
    .collection<AlgorithmData>("algorithms")
    .findOne({ id: params.algorithm });

  return json({ algorithm });
};

export default function AlgorithmRoute() {
  const { algorithm } = useLoaderData<typeof loader>();
  const [currentStep, setCurrentStep] = React.useState(0);

  if (!algorithm) {
    return null;
  }

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
              currentLine={algorithm.steps[currentStep].line}
            />
          </div>
        }
        rightComponent={
          <VisualizationCanvas
            visualisationItems={algorithm.steps[currentStep].visualisationItems}
          />
        }
      />
      <StepsPanel
        step={currentStep}
        stepsCount={algorithm.steps.length}
        onStepChange={setCurrentStep}
      />
    </div>
  );
}
