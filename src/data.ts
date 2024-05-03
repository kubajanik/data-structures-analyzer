import { Edge, Node } from "reactflow"

export const nodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      value: "1",
      labels: ["current", "fast"],
    },
    type: "node",
  },
  {
    id: "2",
    position: { x: 200, y: 0 },
    data: {
      value: "2",
    },
    type: "node",
  },
  {
    id: "3",
    position: { x: 400, y: 0 },
    data: {
      value: "3",
      labels: [],
    },
    type: "node",
  },
  {
    id: "4",
    position: { x: 600, y: 0 },
    data: {
      value: "4",
      labels: ["last"],
    },
    type: "node",
  },
]

export const edges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
  },
  {
    id: "3-4",
    source: "3",
    target: "4",
  },
]
