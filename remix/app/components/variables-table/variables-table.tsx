import { PrimitiveVariable } from "types"

interface VariablesTableProps {
  primitives: PrimitiveVariable[]
}

export const VariablesTable = ({ primitives }: VariablesTableProps) => {
  if (!primitives.length) {
    return null
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <table className="text-xs">
        <thead>
          <tr className="bg-blue-400 text-blue-50">
            <th className="px-4 py-2 font-normal">VARIABLE</th>
            <th className="px-4 py-2 font-normal">VALUE</th>
          </tr>
        </thead>
        <tbody>
          {primitives.map(({ name, value, isUsedInCurrentLine }) => (
            <tr
              key={name}
              className={`${isUsedInCurrentLine ? "bg-neutral-200" : "bg-neutral-100"} text-neutral-500 text-center`}
            >
              <td className="px-4 py-2">{name}</td>
              <td className="px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
