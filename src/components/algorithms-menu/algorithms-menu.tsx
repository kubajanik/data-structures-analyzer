const algorithms = [
  { name: "Length of list", key: "length-of-list" },
  { name: "Middle of list", key: "middle-of-list" },
  { name: "Push to end", key: "push-to-end" },
  {
    name: "Remove duplicates from sorted",
    key: "remove-duplicates-from-sorted",
  },
  { name: "Nth from end (two pointers)", key: "nth-from-end-two-pointers" },
]

interface AlogrithmsMenuProps {
  selectedAlgorithm: string | null
}

export const AlogrithmsMenu = ({ selectedAlgorithm }: AlogrithmsMenuProps) => {
  return (
    <nav className="border-r border-neutral-100">
      <ul>
        {algorithms.map((algorithm) => (
          <li
            key={algorithm.key}
            className={`text-sm text-neutral-500 py-1 px-3 rounded-lg mt-2 ${algorithm.key === selectedAlgorithm ? "bg-neutral-100 shadow-sm " : ""}`}
          >
            <a href={`/?algorithm=${algorithm.key}`}>{algorithm.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
