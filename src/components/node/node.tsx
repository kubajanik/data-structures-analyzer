import { Handle, NodeProps, Position } from "reactflow"

export const Node = ({
  data,
}: NodeProps<{ value: string; labels?: string[] }>) => {
  return (
    <>
      <Handle type="source" position={Position.Right} className="opacity-0" />

      <div className="relative grid place-content-center size-16 bg-blue-400 rounded-lg text-blue-50 text-lg ">
        {data.value}

        <div className="absolute bottom-16 left-0 flex flex-col gap-2 w-16 mb-2">
          {data.labels?.map((label) => (
            <div
              key={label}
              className="bg-neutral-300 text-neutral-500 py-0.5 text-xs text-center rounded-md"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <Handle type="target" position={Position.Left} className="opacity-0" />
    </>
  )
}
