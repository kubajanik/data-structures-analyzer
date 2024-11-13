"use client";
import { useState } from "react";

import { AlgorithmData } from "@/types";

import { VisualizationCanvas } from "./visualization-canvas";
import { CodeViewer } from "./code-viewer";
import { StepsPanel } from "./steps-panel";

interface Props {
  algorithmData: AlgorithmData;
}

export default function Main({ algorithmData }: Props) {
  const [step, setStep] = useState(0);

  const { visualisationItems, line } = algorithmData.steps[step];

  return (
    <div className="grid w-full grid-cols-2 divide-x-2 divide-neutral-100">
      <div className="grid grid-rows-4 divide-y-2 divide-neutral-100">
        <div className="p-4 text-xs text-neutral-500">
          <h2>{algorithmData.name}</h2>
          <p>{algorithmData.description}</p>
        </div>

        <div className="relative row-span-3">
          <CodeViewer
            sourceCode={algorithmData.sourceCode}
            currentLine={line}
          />

          <StepsPanel
            step={step}
            stepsCount={algorithmData.steps.length}
            onStepChange={setStep}
          />
        </div>
      </div>

      <div className="">
        <VisualizationCanvas
          key={algorithmData.id}
          visualisationItems={visualisationItems}
        />
      </div>
    </div>
  );
}
