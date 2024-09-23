import { useEffect, useState } from "react"

import { DebugResult } from "types"

export const useDebugAlgorithm = (algorithmName?: string) => {
  const [debugResult, setDebugResult] = useState<DebugResult>()

  useEffect(() => {
    const debugAlgorithm = async () => {
      if (!algorithmName) {
        return
      }

      setDebugResult(undefined)
      const data = await fetch(
        `http://localhost:8080/debug-algorithm/${algorithmName}`
      ).then((res) => res.json())
      setDebugResult(data)
    }

    debugAlgorithm()
  }, [algorithmName])

  return debugResult
}
