import { randomUUID } from "crypto"

import {
  DataStructureVisualisation,
  DebugResult,
  DebugStep,
  InitialDebugResult,
  ListNode,
  Primitive,
  PrimitiveVariable,
  SinglyLinkedList,
  VisualisationEdge,
  VisualisationItems,
  VisualisationNode,
} from "~/types"

import { highlightSourceCode } from "./highlight"
import { isVariableUsedInCurrentLine } from "./helpers"

function isPrimitive(value: unknown): value is Primitive {
  if (typeof value == "object" || typeof value == "function") {
    return false
  }

  return true
}

function prepareSinglyLinkedList(
  list: SinglyLinkedList
): Omit<DataStructureVisualisation, "type" | "name"> {
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

  debugResult.steps.shift()

  debugResult.steps.forEach((currentStep, index) => {
    const nextStep = debugResult.steps[index + 1]
    if (!nextStep) {
      return
    }

    const visualisationItems: VisualisationItems = {
      dataStructures: [],
      primitives: [],
    }

    const variablesArray = Object.entries(nextStep.variables).map(
      ([name, value]) => ({ name, value })
    )

    const primitives: PrimitiveVariable[] = variablesArray
      .filter((variable) => isPrimitive(variable.value))
      .map(({ name, value }) => {
        return {
          name,
          value: value?.toString(),
          isUsedInCurrentLine: isVariableUsedInCurrentLine(
            currentStep.lineOfCode,
            name
          ),
        }
      })
    visualisationItems.primitives = primitives

    variablesArray.forEach(({ name, value }) => {
      if (isPrimitive(value)) {
        // TODO: remove it
      } else if (Array.isArray(value)) {
        const indexVariables = primitives.filter(({ name }) =>
          /(low|high|mid|opposite|next|leftEdge|^i$)/i.test(name)
        )

        const nodes: VisualisationNode[] = value.map((item, index) => ({
          type: "array-item",
          id: randomUUID().toString(),
          data: {
            value: item,
            index,
            pointers: indexVariables
              .filter(({ value }) => value === `${index}`)
              .map(({ name }) => name),
          },
          position: { x: index * (64 + 4), y: 0 },
        }))
        visualisationItems.dataStructures.push({
          name,
          type: "array",
          nodes,
          edges: [],
        })
      } else {
        const type = value._type

        if (type === "singly-linked-list") {
          visualisationItems.dataStructures.push({
            name,
            type,
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
                        pointers: [...(y.data.pointers ?? []), name],
                      },
                    }
                  : y
              ),
            }))
        }
      }
    })

    steps.push({
      line: currentStep.line,
      lineOfCode: currentStep.lineOfCode,
      visualisationItems,
    })
  })

  return {
    sourceCode: highlightSourceCode(debugResult.sourceCode),
    steps,
  }
}
