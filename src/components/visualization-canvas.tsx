"use client";

import {
  ReactFlow,
  DefaultEdgeOptions,
  MarkerType,
  NodeTypes,
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { VisualisationItems } from "@/types";

import { ArrayItem } from "./array-item";
import { VariablesTable } from "./variables-table";
import { ListNode } from "./list-node";

const nodeTypes: NodeTypes = {
  "array-item": ArrayItem,
  "list-node": ListNode,
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
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      fitView
      fitViewOptions={{ padding: 0.4 }}
    >
      <Panel position="top-right">
        <VariablesTable primitives={primitives} />
      </Panel>
    </ReactFlow>
  );
};
