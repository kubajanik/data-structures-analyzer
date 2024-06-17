import { Node, Edge } from "reactflow"

import { ListNode, SinglyLinkedList } from "./list"

export type Primitive = string | number | boolean | null | undefined

export type DataStructureVariable = SinglyLinkedList | ListNode

export interface InitialDebugStep {
  line: number
  variables: Record<string, Primitive | DataStructureVariable>
}

export interface InitialDebugResult {
  sourceCode: string
  steps: InitialDebugStep[]
}

export type VisualisationNode = Node<{ value: string; pointers: string[] }>
export type VisualisationEdge = Edge

export interface DataStructureVisualisation {
  name: string
  nodes: VisualisationNode[]
  edges: VisualisationEdge[]
}

export interface VisualisationItems {
  dataStructures: DataStructureVisualisation[]
  primitives: { name: string; value?: string }[]
}

export interface DebugStep {
  line: number
  visualisationItems: VisualisationItems
}

export interface DebugResult {
  sourceCode: string
  steps: DebugStep[]
}
