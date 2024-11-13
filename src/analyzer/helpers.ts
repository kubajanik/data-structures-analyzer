export const ALGORITHMS_PATH = `${process.cwd()}/src/algorithms/`;

export function generateId(path: string) {
  return path
    .replace("/algorithm.js", "")
    .replace(ALGORITHMS_PATH, "")
    .replaceAll(" ", "-")
    .replaceAll("/", "-")
    .toLowerCase();
}
