import { useEffect, useState } from "react"

import {
  AlogrithmsMenu,
  CodeViewer,
  Header,
  SplitView,
  StepsPanel,
  VisualizationCanvas,
} from "./components"

import { useAlgorithmName, useDebugAlgorithm } from "./hooks"

export default function App() {
  const [currentStep, setCurrentStep] = useState(0)

  const algorithmName = useAlgorithmName()
  const debugResult = useDebugAlgorithm(algorithmName)

  useEffect(() => {
    setCurrentStep(0)
  }, [algorithmName])

  return (
    <main className="h-screen flex flex-col font-mono">
      <Header />

      <div className="h-full flex border-neutral-200">
        <AlogrithmsMenu selectedAlgorithm={algorithmName} />

        {debugResult ? (
          <div className="flex w-full relative">
            <SplitView
              leftComponent={
                <CodeViewer
                  sourceCode={debugResult.sourceCode}
                  currentLine={debugResult.steps[currentStep].line}
                />
              }
              rightComponent={
                <VisualizationCanvas
                  visualisationItems={
                    debugResult.steps[currentStep].visualisationItems
                  }
                />
              }
            />

            <StepsPanel
              step={currentStep}
              stepsCount={debugResult.steps.length}
              onStepChange={setCurrentStep}
            />
          </div>
        ) : (
          <div className="w-full grid place-items-center">
            {algorithmName ? "Loading..." : "Pick algorithm"}
          </div>
        )}
      </div>
    </main>
  )
}
