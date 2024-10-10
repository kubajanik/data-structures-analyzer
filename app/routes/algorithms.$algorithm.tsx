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

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const algorithm = await db
    .collection<AlgorithmData>("algorithms")
    .findOne({ id: params.algorithm });

  return json({ algorithm });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return data
    ? [{ title: `Data Structures Analyzer - ${data?.algorithm?.name ?? ""}` }]
    : [{ title: "Data Structures Analyzer - Algorithm Not Found" }];
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
          <CodeViewer
            sourceCode={algorithm.sourceCode}
            currentLine={algorithm.steps[currentStep].line}
          />
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
