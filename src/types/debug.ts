import type { Node, Edge } from "@xyflow/react";

import { ListNode, SinglyLinkedList } from "./list";

export type Primitive = string | number | boolean | null | undefined;

export type DataStructureVariable = SinglyLinkedList | ListNode;

export interface InitialDebugStep {
  line: number;
  lineOfCode: string;
  variables: Record<string, Primitive | DataStructureVariable>;
}

export interface InitialDebugResult {
  sourceCode: string;
  steps: InitialDebugStep[];
}

export type VisualisationNode = Pick<
  Node<{ value: string; pointers?: string[]; dataStructureName?: string }>,
  "id" | "type" | "position" | "data"
>;
export type VisualisationEdge = Pick<Edge, "source" | "target" | "id">;

export interface DataStructureVisualisation {
  type: string;
  name: string;
  nodes: VisualisationNode[];
  edges: VisualisationEdge[];
}

export interface PrimitiveVariable {
  name: string;
  value?: string;
  isUsedInCurrentLine: boolean;
}

export interface VisualisationItems {
  id: string;
  dataStructures: DataStructureVisualisation[];
  primitives: PrimitiveVariable[];
}

export interface DebugStep {
  line: number;
  lineOfCode: string;
  visualisationItems: VisualisationItems;
}

export interface DebugResult {
  sourceCode: string;
  steps: DebugStep[];
}

export interface AlgorithmData extends DebugResult {
  id: string;
  name: string;
  category: string;
  description?: string;
}

export interface AlgorithmMetadata {
  name: string;
  category: string;
  description?: string;
  indexes?: string[] | Record<string, string[]>;
}
