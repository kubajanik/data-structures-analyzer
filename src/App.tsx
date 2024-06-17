import { useState } from "react"

import { CodeViewer, VisualizationCanvas } from "./components"

import { useDebugAlgorithm } from "./hooks/use-debug-algorithm"

export default function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const { data: debugResult } = useDebugAlgorithm(
    "remove-duplicates-from-sorted"
  )

  if (!debugResult) {
    return "Loading..."
  }

  const currentStep = debugResult.steps[currentStepIndex]

  return (
    <main className="h-screen grid grid-cols-2">
      <CodeViewer
        sourceCode={debugResult.sourceCode}
        currentLine={currentStep.line}
      />
      <VisualizationCanvas
        visualisationItems={currentStep.visualisationItems}
      />

      <div className="fixed bottom-8 left-1/2 flex gap-4 -translate-x-1/2">
        <button onClick={() => setCurrentStepIndex(0)}>Reset</button>
        <button
          onClick={() =>
            setCurrentStepIndex((step) => (step !== 0 ? step - 1 : step))
          }
        >
          Prev step
        </button>
        <button
          onClick={() =>
            setCurrentStepIndex((step) =>
              step < debugResult.steps.length - 1 ? step + 1 : step
            )
          }
        >
          Next step
        </button>
      </div>
    </main>
  )
}
