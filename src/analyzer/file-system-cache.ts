import fs from "node:fs";

export function createFileSystemCache<TData>(key: string) {
  return {
    save: (data: TData) => {
      fs.writeFileSync(`./${key}.json`, JSON.stringify(data));
    },
    get: (): TData | undefined => {
      if (fs.existsSync(`./${key}.json`)) {
        return JSON.parse(fs.readFileSync(`./${key}.json`, "utf-8"));
      }
    },
  };
}
