import { describe, expect, test } from "vitest";

import { isVariableUsedInCurrentLine } from "./helpers";

describe("isVariableUsedInCurrentLine()", () => {
  test("should return true when variable is used in line of code", () => {
    expect(isVariableUsedInCurrentLine("for(let i = 0; i < n", "i")).toBe(true);
    expect(isVariableUsedInCurrentLine("for (let i = 0; i < n", "n")).toBe(
      true,
    );
    expect(isVariableUsedInCurrentLine("slow = slow.next", "slow")).toBe(true);
    expect(isVariableUsedInCurrentLine("arr[i] = arr[next]", "next")).toBe(
      true,
    );
    expect(isVariableUsedInCurrentLine("arr[i] = arr[next]", "arr")).toBe(true);
    expect(isVariableUsedInCurrentLine("arr[i] = arr[next]", "i")).toBe(true);
  });

  test("should return false when variable is not used in line of code", () => {
    expect(isVariableUsedInCurrentLine("for(let i = 0; i < n", "v")).toBe(
      false,
    );
    expect(isVariableUsedInCurrentLine("slow = slow.next", "slo")).toBe(false);
    expect(isVariableUsedInCurrentLine("array = [1, 2]", "arra")).toBe(false);
    expect(isVariableUsedInCurrentLine("arr[i] = arr[next]", "ne")).toBe(false);
    expect(isVariableUsedInCurrentLine("x = arr[next]", "ar")).toBe(false);
  });
});
