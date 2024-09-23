import useSWR, { SWRResponse } from "swr"

import { DebugResult } from "types"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const useDebugAlgorithm = (
  algorithmName: string | null
): SWRResponse<DebugResult> =>
  useSWR(
    algorithmName
      ? `http://localhost:8080/debug-algorithm/${algorithmName}`
      : null,
    fetcher,
    {}
  )
