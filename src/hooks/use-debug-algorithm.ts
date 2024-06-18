import { useEffect, useState } from "react"

import { DebugResult } from "../../server/types"

export const useDebugAlgorithm = (algorithmName: string) => {
  const [data, setData] = useState<DebugResult>()
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  )

  useEffect(() => {
    setStatus("loading")

    fetch(`http://localhost:8080/debug-algorithm/${algorithmName}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        setStatus("success")
      })
      .catch(() => {
        setStatus("error")
      })
  }, [algorithmName])

  return { data, status }
}
