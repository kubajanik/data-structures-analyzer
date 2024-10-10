import { describe, expect, test } from "vitest";

import {
  readVariablesFromSourceCode,
  addTypeofGuardsToVariables,
} from "./variables";

describe("readVariablesFromSourceCode()", () => {
  const cases = [
    {
      sourceCode: `
      export function removeDuplicatesFromSorted(list) {
        debugger
        let current = list.head

        while (current) {
          let temp = current

          while (temp && temp.value == current.value) {
            temp = temp.next
          }

          current.next = temp
          current = current.next
        }
      }
    `,
      variables: ["list", "current", "temp"],
    },
    {
      sourceCode: `
      export function middleOfList(list) {
        debugger
        let fast = list.head
        let slow = list.head

        while (fast && fast.next) {
          fast = fast?.next?.next
          slow = slow?.next
        }

        return slow?.value
      }
    `,
      variables: ["list", "fast", "slow"],
    },
    {
      sourceCode: `
      export function pushToEnd(list, value) {
        debugger
        const newNode = new Node(value)

        if (list.head == null) {
          list.head = newNode
          return
        }

        let last = list.head
        while (last.next) {
          last = last.next
        }

        last.next = newNode
      }
    `,
      variables: ["list", "value", "newNode", "last"],
    },
  ];

  test.each(cases)(
    "should return list of variable names from source code",
    ({ sourceCode, variables }) => {
      expect(readVariablesFromSourceCode(sourceCode)).toEqual(variables);
    },
  );
});

describe("addTypeofGuardsToVariables()", () => {
  test("should return variables with typeof guards", () => {
    expect(addTypeofGuardsToVariables(["list", "fast", "slow"]))
      .toMatchInlineSnapshot(`
      [
        "list: typeof list !== 'undefined' ? list : undefined",
        "fast: typeof fast !== 'undefined' ? fast : undefined",
        "slow: typeof slow !== 'undefined' ? slow : undefined",
      ]
    `);
  });
});
