import {
  DataStructureVisualisation,
  DebugResult,
  DebugStep,
  InitialDebugResult,
  ListNode,
  Primitive,
  SinglyLinkedList,
  VisualisationEdge,
  VisualisationItems,
  VisualisationNode,
} from "../types"

function isPrimitive(value: unknown): value is Primitive {
  if (typeof value == "object" || typeof value == "function") {
    return false
  }

  return true
}

function prepareSinglyLinkedList(
  list: SinglyLinkedList
): Omit<DataStructureVisualisation, "name"> {
  const nodes: VisualisationNode[] = []
  const edges: VisualisationEdge[] = []

  let current: ListNode | undefined = list.head
  let index = 0

  while (current) {
    nodes.push({
      id: current.id,
      type: "list-node",
      data: { value: current.value, pointers: [] },
      position: { x: index * 200, y: 0 },
    })

    if (current.next) {
      const currentId = current.id
      const nextId = current.next.id

      edges.push({
        id: `${currentId}-${nextId}`,
        source: currentId,
        target: nextId,
      })
    }

    current = current.next
    index++
  }

  return { nodes, edges }
}

export function transformDebugResult(
  debugResult: InitialDebugResult
): DebugResult {
  const steps: DebugStep[] = []

  debugResult.steps.map((step) => {
    const visualisationItems: VisualisationItems = {
      dataStructures: [],
      primitives: [],
    }

    Object.entries(step.variables).map(([name, value]) => {
      if (isPrimitive(value)) {
        visualisationItems.primitives.push({
          name,
          value: value?.toString(),
        })
      } else {
        const type = value._type

        if (type === "singly-linked-list") {
          visualisationItems.dataStructures.push({
            name,
            ...prepareSinglyLinkedList(value),
          })
        } else if (type === "list-node") {
          visualisationItems.dataStructures =
            visualisationItems.dataStructures.map((x) => ({
              ...x,
              nodes: x.nodes.map((y) =>
                y.id === value.id
                  ? {
                      ...y,
                      data: {
                        ...y.data,
                        pointers: [...y.data.pointers, name],
                      },
                    }
                  : y
              ),
            }))
        }
      }
    })

    steps.push({ line: step.line, visualisationItems })
  })

  return {
    sourceCode: debugResult.sourceCode,
    steps,
  }
}
