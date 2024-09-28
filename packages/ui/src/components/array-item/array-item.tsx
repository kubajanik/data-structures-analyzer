import { NodeProps } from "reactflow"

export const ArrayItem = ({
  data,
}: NodeProps<{ value: string; index?: number; pointers: string[] }>) => {
  return (
    <>
      <div
        className={`relative grid place-content-center ${data.pointers.length === 0 ? "bg-blue-400" : "bg-blue-500"} rounded-lg size-16 text-blue-50 text-md`}
      >
        {data.value}

        <div className="absolute bottom-16 left-0 flex flex-col gap-2 w-16 mb-2">
          {data.pointers?.map((pointer) => (
            <div
              key={pointer}
              className="bg-neutral-100 text-neutral-500 shadow-md py-0.5 text-xs text-center rounded-md"
            >
              {pointer}
            </div>
          ))}
        </div>

        <div className="absolute -bottom-6 text-neutral-500  text-xs left-1/2 -translate-x-1/2">
          {data.index}
        </div>
      </div>
    </>
  )
}
