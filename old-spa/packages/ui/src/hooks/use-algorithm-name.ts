import { useEffect, useState } from "react"

export const useAlgorithmName = () => {
  const [algorithmName, setAlgorithmName] = useState(getHashValue())

  useEffect(() => {
    const handleHashChange = () => setAlgorithmName(getHashValue())

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return algorithmName
}

const getHashValue = () => window.location.hash.replace("#", "")
