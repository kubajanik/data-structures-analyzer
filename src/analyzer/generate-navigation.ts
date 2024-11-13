import path from "node:path";
import fs from "node:fs";

import { Navigation } from "@/types";

import { createFileSystemCache } from "./file-system-cache";
import { ALGORITHMS_PATH, generateId } from "./helpers";

const cache = createFileSystemCache<Navigation>("navigation");

export function generateNavigationHelper(dirPath = ALGORITHMS_PATH, level = 0) {
  const navigation: Navigation = [];
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const isDirectory = fs.lstatSync(itemPath).isDirectory();
    const containsAlgo = fs
      .readdirSync(itemPath)
      .some((x) => x.includes("algorithm.js"));

    if (isDirectory && !containsAlgo) {
      navigation.push({
        name: item,
        level,
        children: generateNavigationHelper(itemPath, level + 1),
      });
    } else {
      const id = generateId(itemPath);

      navigation.push({ id, name: item, level });
    }
  }

  cache.save(navigation);

  return navigation;
}

export function generateNavigation() {
  const cachedNavigation = cache.get();
  if (cachedNavigation) {
    console.log("generateNavigation() - returning from cache");
    return cachedNavigation;
  }

  console.log("generateNavigation() - building from file system");

  const navigation = generateNavigationHelper();

  cache.save(navigation);

  return navigation;
}
