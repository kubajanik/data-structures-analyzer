import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Data Structures Analyzer - Algorithms" }];
};

export default function AlgorithmsIndex() {
  return (
    <div className="grid w-full place-items-center text-sm text-neutral-500">
      Pick algorithm
    </div>
  );
}
