import { VisualizationCanvas } from "./components"
import { edges, nodes } from "./data"

export default function App() {
  return (
    <main className="h-screen grid grid-cols-2">
      <div></div>
      <VisualizationCanvas data={{ nodes, edges }} />
    </main>
  )
}
