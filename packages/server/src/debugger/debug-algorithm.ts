import childProcess from "node:child_process"
import { readFile } from "node:fs/promises"

import { InitialDebugResult, InitialDebugStep } from "types"

import {
  addTypeofGuardsToVariables,
  readVariablesFromSourceCode,
} from "./utils"

export const debugAlgorithm = async (
  algorithmName: string
): Promise<InitialDebugResult> => {
  const sourceCode = await readFile(
    `${import.meta.dirname}/algorithms/${algorithmName}.js`,
    "utf-8"
  )
  const variables = readVariablesFromSourceCode(sourceCode)
  const variablesWithGuards = addTypeofGuardsToVariables(variables)

  return new Promise((resolve) => {
    const debugProcess = childProcess.exec(
      `node inspect ${import.meta.dirname}/run-algorithm.js ${algorithmName}`
    )

    const steps: InitialDebugStep[] = []
    let line: string = ""
    let currentLineOfCode: string = ""

    debugProcess.stdout?.on("data", (data: string) => {
      const isDebuggingStarted = data.includes("Break on start")
      if (isDebuggingStarted) {
        debugProcess.stdin?.write("cont\n")
        return
      }

      const isDebuggingEnded = data.includes(
        "break in src/debugger/run-algorithm"
      )
      if (isDebuggingEnded) {
        debugProcess.kill()
        resolve({ sourceCode, steps })
      }

      const breakpointMatch = /break in .+algorithms.+js:(\d+)/.exec(data)
      const matchedData = /'data (.+)'/.exec(data)
      const currentLineMatch = /> ?\d+(.*)$/m.exec(data)

      if (breakpointMatch && currentLineMatch) {
        line = breakpointMatch[1]
        currentLineOfCode = currentLineMatch[1]

        const extractVariablesCommand =
          "exec `data ${JSON.stringify({" +
          variablesWithGuards.join(",") +
          "})}`\n"
        debugProcess.stdin?.write(extractVariablesCommand)
      }

      if (matchedData) {
        steps.push({
          line: Number(line),
          lineOfCode: currentLineOfCode,
          variables: JSON.parse(matchedData[1]),
        })
        debugProcess.stdin?.write("next\n")
      }
    })
  })
}
