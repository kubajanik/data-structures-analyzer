import { exec } from "node:child_process"
import { readFile } from "node:fs/promises"

export async function debugAlgorithm(algorithmName) {
  const variablesRegex = /(?:let|const) (\w+)/gm
  const sourceCode = await readFile(
    `./server/debugger/algorithms/${algorithmName}.js`,
    "utf-8"
  )
  const variables = [...sourceCode.matchAll(variablesRegex)].map(
    (match) => match[1]
  )
  const variablesWithGuards = variables.map(
    (v) => `${v}: typeof ${v} !== 'undefined' ? ${v} : undefined`
  )

  return new Promise((resolve) => {
    const debugProcess = exec(
      `node inspect ./server/debugger/run-algorithm.js ${algorithmName}`
    )

    setTimeout(() => {
      debugProcess.stdin?.write("c\n")
    }, 1000)

    let steps = []
    let line = ""

    debugProcess.stdout?.on("data", (data) => {
      const breakpointMatch = /break in .+algorithms.+js:(\d+)/.exec(data)
      const isEnd = !!/break in .+run-algorithm/.exec(data)
      const matchedData = /'data (.+)'/.exec(data)

      if (breakpointMatch) {
        line = breakpointMatch[1]
        debugProcess.stdin.write(
          "exec `data ${JSON.stringify({ list," +
            variablesWithGuards.join(",") +
            "})}`\n"
        )
      }

      if (matchedData) {
        steps.push({
          line: Number(line),
          variables: JSON.parse(matchedData[1]),
        })
        debugProcess.stdin.write("n\n")
      }

      if (isEnd) {
        debugProcess.kill()
        resolve({ sourceCode, steps })
      }
    })
  })
}
