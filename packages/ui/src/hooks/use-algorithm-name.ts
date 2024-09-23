import { useEffect, useState } from "react"

export const useAlgorithmName = () => {
  const [algorithmName, setAlgorithmName] = useState<string>()

  useEffect(() => {
    const handleHashChange = () =>
      setAlgorithmName(window.location.hash.replace("#", ""))

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return algorithmName
}
