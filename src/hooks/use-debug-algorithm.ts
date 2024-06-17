import { useEffect, useState } from "react"

import { DebugResult } from "../../server/types"

export const useDebugAlgorithm = (algorithmName: string) => {
  const [data, setData] = useState<DebugResult>()

  useEffect(() => {
    fetch(`http://localhost:8080/debug-algorithm/${algorithmName}`)
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [algorithmName])

  return { data }
}
