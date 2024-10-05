import { useAlgorithmsList } from "../../hooks"

interface AlogrithmsMenuProps {
  selectedAlgorithm?: string
}

export const AlogrithmsMenu = ({ selectedAlgorithm }: AlogrithmsMenuProps) => {
  const algorithms = useAlgorithmsList()

  return (
    <nav className="flex-shrink-0 border-r border-neutral-100">
      <ul>
        {algorithms
          ? algorithms.map((algorithm) => (
              <li
                key={algorithm.name}
                className={`text-xs text-neutral-500 py-1 px-3 rounded-sm mt-2 ${algorithm.name === selectedAlgorithm ? "bg-neutral-100 shadow-sm " : ""}`}
              >
                <a href={`#${algorithm.name}`}>{algorithm.name}</a>
              </li>
            ))
          : null}
      </ul>
    </nav>
  )
}
