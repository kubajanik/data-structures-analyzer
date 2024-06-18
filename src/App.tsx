import { useEffect, useState } from "react"

import { Button, CodeViewer, VisualizationCanvas } from "./components"

import { useDebugAlgorithm } from "./hooks/use-debug-algorithm"

export default function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [algorithmName, setAlgorithmName] = useState("length-of-list")

  const { data: debugResult, status } = useDebugAlgorithm(algorithmName)

  useEffect(() => {
    setCurrentStepIndex(0)
  }, [algorithmName])

  if (status === "loading" || !debugResult) {
    return (
      <main className="h-screen grid place-items-center text-2xl text-neutral-500">
        Loading...
      </main>
    )
  }

  const currentStep = debugResult.steps[currentStepIndex]

  return (
    <main className="h-screen flex flex-col">
      <select
        className="my-2 self-center"
        value={algorithmName}
        onChange={(event) => setAlgorithmName(event.target.value)}
      >
        <option value="length-of-list">Length of list</option>
        <option value="middle-of-list">Middle of list</option>
        <option value="push-to-end">Push to end</option>
        <option value="remove-duplicates-from-sorted">
          Remove duplicates from sorted
        </option>
      </select>

      <div className="h-full grid grid-cols-2 border-neutral-200">
        <CodeViewer
          sourceCode={debugResult.sourceCode}
          currentLine={currentStep.line}
        />
        <VisualizationCanvas
          visualisationItems={currentStep.visualisationItems}
        />
      </div>

      <div className="fixed bottom-8 left-1/2 flex gap-4 -translate-x-1/2">
        <Button onClick={() => setCurrentStepIndex(0)}>Reset</Button>
        <Button
          onClick={() =>
            setCurrentStepIndex((step) => (step !== 0 ? step - 1 : step))
          }
        >
          Prev step
        </Button>
        <Button
          onClick={() =>
            setCurrentStepIndex((step) =>
              step < debugResult.steps.length - 1 ? step + 1 : step
            )
          }
        >
          Next step
        </Button>
      </div>
    </main>
  )
}
