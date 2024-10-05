import { useEffect, useState } from "react"

import { AlgorithmData } from "types"

export const useAlgorithmsList = () => {
  const [algorithms, setAlgorithms] =
    useState<Pick<AlgorithmData, "name" | "category">[]>()

  useEffect(() => {
    const fetchData = async () => {
      setAlgorithms(undefined)
      const data = await fetch("http://localhost:8080/algorithms-list").then(
        (res) => res.json()
      )
      setAlgorithms(data)
    }

    fetchData()
  }, [])

  return algorithms
}
