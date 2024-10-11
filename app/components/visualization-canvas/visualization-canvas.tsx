import {
  ReactFlow,
  DefaultEdgeOptions,
  MarkerType,
  NodeTypes,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";

import { VisualisationItems } from "~/types";

import { ListNode } from "../list-node";
import { VariablesTable } from "../variables-table";
import { ArrayItem } from "../array-item";

const nodeTypes: NodeTypes = {
  "list-node": ListNode,
  "array-item": ArrayItem,
};

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
};

interface VisualizationCanvasProps {
  visualisationItems: VisualisationItems;
}

export const VisualizationCanvas = ({
  visualisationItems,
}: VisualizationCanvasProps) => {
  const { dataStructures, primitives } = visualisationItems;
  const nodes = dataStructures.flatMap(({ nodes }) => nodes);
  const edges = dataStructures.flatMap(({ edges }) => edges);

  return (
    <div className="h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
        fitViewOptions={{ padding: 0.35 }}
        panOnDrag={false}
      >
        <Panel position="top-right">
          <VariablesTable primitives={primitives} />
        </Panel>
      </ReactFlow>
    </div>
  );
};
