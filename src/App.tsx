import { useState } from "react"

import {
  AlogrithmsMenu,
  Button,
  CodeViewer,
  Header,
  VisualizationCanvas,
} from "./components"

import { useDebugAlgorithm } from "./hooks/use-debug-algorithm"

export default function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const searchParams = new URLSearchParams(window.location.search)

  const { data: debugResult } = useDebugAlgorithm(searchParams.get("algorithm"));

  return (
    <main className="h-screen flex flex-col font-mono">
      <Header />

      <div className="h-full grid grid-cols-12 border-neutral-200">
        <AlogrithmsMenu selectedAlgorithm={searchParams.get("algorithm")} />

        {debugResult ? (
          <>
            <CodeViewer
              sourceCode={debugResult.sourceCode}
              currentLine={debugResult.steps[currentStepIndex].line}
            />
            <VisualizationCanvas
              visualisationItems={
                debugResult.steps[currentStepIndex].visualisationItems
              }
            />

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
          </>
        ) : (
          <div className="grid place-items-center col-span-10">Loading...</div>
        )}
      </div>
    </main>
  )
}
