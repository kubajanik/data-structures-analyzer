import { Handle, Position } from "@xyflow/react";

export const ListNode = ({
  data,
}: {
  data: { value: string; pointers: string[] };
}) => {
  return (
    <>
      <Handle type="source" position={Position.Right} className="opacity-0" />

      <div className="text-md relative grid size-16 place-content-center rounded-lg bg-blue-400 text-blue-50 shadow-md">
        {data.value}

        <div className="absolute bottom-16 left-0 mb-2 flex w-16 flex-col gap-2">
          {data.pointers?.map((pointer) => (
            <div
              key={pointer}
              className="rounded-md bg-neutral-100 py-0.5 text-center text-xs text-neutral-500 shadow-md"
            >
              {pointer}
            </div>
          ))}
        </div>
      </div>

      <Handle type="target" position={Position.Left} className="opacity-0" />
    </>
  );
};
