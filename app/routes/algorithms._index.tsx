import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Data Structures Analyzer - Algorithms" },
  ]
}

export default function AlgorithmsIndex() {
  return (
    <div className="w-full grid place-items-center text-neutral-500 text-sm">
      Pick algorithm
    </div>
  )
}
