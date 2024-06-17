import ReactFlow, {
  Background,
  DefaultEdgeOptions,
  MarkerType,
  NodeTypes,
  Panel,
} from "reactflow"
import "reactflow/dist/style.css"

import { ListNode } from "../list-node"
import { VisualisationItems } from "../../../server/types"

const nodeTypes: NodeTypes = {
  "list-node": ListNode,
}

const defaultEdgeOptions: DefaultEdgeOptions = {
  type: "straight",
  focusable: false,
  markerEnd: {
    type: MarkerType.Arrow,
    color: "#d4d4d4",
  },
  style: {
    strokeWidth: 2,
    stroke: "#d4d4d4",
  },
}

interface VisualizationCanvasProps {
  visualisationItems: VisualisationItems
}

export const VisualizationCanvas = ({
  visualisationItems,
}: VisualizationCanvasProps) => {
  const { dataStructures, primitives } = visualisationItems
  const { nodes, edges } = dataStructures[0]

  return (
    <div className="">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
      >
        <Background />

        <Panel position="top-right">
          <ul>
            {primitives.map(({ name, value }) => (
              <li key={name}>
                {name}: {value}
              </li>
            ))}
          </ul>
        </Panel>
      </ReactFlow>
    </div>
  )
}
