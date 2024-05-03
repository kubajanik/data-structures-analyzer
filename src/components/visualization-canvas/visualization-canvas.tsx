import ReactFlow, {
  Background,
  DefaultEdgeOptions,
  Edge,
  MarkerType,
  Node,
  NodeTypes,
} from "reactflow"
import "reactflow/dist/style.css"

import { Node as CustomNode } from "../node"

const nodeTypes: NodeTypes = {
  node: CustomNode,
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
  data: {
    nodes: Node[]
    edges: Edge[]
  }
}

export const VisualizationCanvas = ({
  data: { nodes, edges },
}: VisualizationCanvasProps) => {
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
      </ReactFlow>
    </div>
  )
}
