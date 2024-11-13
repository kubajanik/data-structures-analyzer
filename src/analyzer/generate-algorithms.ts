import { glob } from "glob";

import fs from "node:fs/promises";

import { AlgorithmData, AlgorithmMetadata } from "@/types";

import { debugAlgorithm } from "./debugger";
import { transformDebugResult } from "./utils";
import { createFileSystemCache } from "./file-system-cache";
import { generateId } from "./helpers";

const cache = createFileSystemCache<AlgorithmData[]>("algorithms");

export const generateAlgorithms = async () => {
  const cachedAlgorithms = cache.get();
  if (cachedAlgorithms) {
    console.log("generateAlgorithms() - returning from cache");
    return cachedAlgorithms;
  }

  console.log("generateAlgorithms() - building from file system");

  const algorithms: AlgorithmData[] = [];
  const basePath = `${process.cwd()}/src/algorithms/`;
  const files = await glob(`${basePath}**/algorithm.js`);

  for (const file of files) {
    const id = generateId(file);
    const algorithmPath = file.replace("/algorithm.js", "");

    const metadata: AlgorithmMetadata = JSON.parse(
      await fs.readFile(`${algorithmPath}/metadata.json`, "utf-8")
    );
    const initialDebugResult = await debugAlgorithm(algorithmPath);
    const debugResult = transformDebugResult(initialDebugResult, metadata);

    algorithms.push({
      id,
      name: metadata.name,
      category: metadata.category,
      description: metadata.description,
      ...debugResult,
    });
  }

  cache.save(algorithms);

  return algorithms;
};
