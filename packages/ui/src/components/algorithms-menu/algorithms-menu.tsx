const algorithms = [
  { name: "Length of list", key: "length-of-list" },
  { name: "Middle of list", key: "middle-of-list" },
  { name: "Push to end", key: "push-to-end" },
  {
    name: "Remove duplicates from sorted",
    key: "remove-duplicates-from-sorted",
  },
  { name: "Nth from end (two pointers)", key: "nth-from-end-two-pointers" },
  { name: "Array in-place reverse", key: "array-in-place-reverse" },
  { name: "Array binary search", key: "array-binary-search" },
  { name: "Array bubble sort", key: "array-bubble-sort" },
  { name: "Array max sum", key: "array-max-sum" },
]

interface AlogrithmsMenuProps {
  selectedAlgorithm?: string
}

export const AlogrithmsMenu = ({ selectedAlgorithm }: AlogrithmsMenuProps) => {
  return (
    <nav className="flex-shrink-0 border-r border-neutral-100">
      <ul>
        {algorithms.map((algorithm) => (
          <li
            key={algorithm.key}
            className={`text-xs text-neutral-500 py-1 px-3 rounded-sm mt-2 ${algorithm.key === selectedAlgorithm ? "bg-neutral-100 shadow-sm " : ""}`}
          >
            <a href={`#${algorithm.key}`}>{algorithm.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
