import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function AlgorithmsIndex() {
  return (
    <div className="w-full grid place-items-center text-neutral-500 text-sm">
      Pick algorithm
    </div>
  )
}
