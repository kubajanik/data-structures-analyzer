import { opendir, readFile } from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

import { debugAlgorithm } from "./debugger"
import { transformDebugResult } from "./utils"

import { AlgorithmData, AlgorithmMetadata } from "~/types"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function generateDatabase() {
  const data: AlgorithmData[] = []

  const rootDir = await opendir(`${__dirname}/algorithms`)

  for await (const categoryDir of rootDir) {
    const categoryPath = await opendir(
      `${categoryDir.path}/${categoryDir.name}`
    )

    for await (const algorithmDir of categoryPath) {
      const algorithmPath = `${algorithmDir.path}/${algorithmDir.name}`
      const metadata: AlgorithmMetadata = JSON.parse(
        await readFile(`${algorithmPath}/metadata.json`, "utf-8")
      )
      const initialDebugResult = await debugAlgorithm(algorithmPath)
      const debugResult = transformDebugResult(initialDebugResult, metadata)

      data.push({
        id: metadata.name.split(" ").join("-").toLowerCase(),
        name: metadata.name,
        category: metadata.category,
        ...debugResult,
      })
    }
  }

  return data
}
