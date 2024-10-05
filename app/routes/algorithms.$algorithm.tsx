import React from "react"

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node"
import { json, useLoaderData } from "@remix-run/react"

import {
  SplitView,
  CodeViewer,
  VisualizationCanvas,
  StepsPanel,
} from "~/components"
import { AlgorithmData } from "~/types"
import { db } from "~/utils/db.server"

export const meta: MetaFunction = () => {
  return [
    { title: "Algorithm" },
    { name: "description", content: "Algorithm view" },
  ]
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const algorithm = await db
    .collection<AlgorithmData>("algorithms")
    .findOne({ id: params.algorithm })

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
