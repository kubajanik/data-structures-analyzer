import React from "react"

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node"
import { json, useLoaderData } from "@remix-run/react"
import { generateDatabase } from "../analyzer/generate-database"

import {
  SplitView,
  CodeViewer,
  VisualizationCanvas,
  StepsPanel,
} from "../components"

export const meta: MetaFunction = () => {
  return [
    { title: "Algorithm" },
    { name: "description", content: "Algorithm view" },
  ]
}

const algorithms = await generateDatabase()

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const algorithm = algorithms.find(
    (algorithm) => algorithm.id === params.algorithm
  )

  return json({ algorithm })
}

export default function AlgorithmRoute() {
  const { algorithm } = useLoaderData<typeof loader>()
  const [currentStep, setCurrentStep] = React.useState(0)

  if (!algorithm) {
    return null
  }

  return (
    <div className="flex w-full relative">
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
  )
}
