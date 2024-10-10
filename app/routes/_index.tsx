import { redirect, type MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Data Structures Analyzer" },
  ]
}

export const loader = () => {
  return redirect("/algorithms")
}

export default function Index() {
  return <div>Data Structures Analyzer</div>
}
