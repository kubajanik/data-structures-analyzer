export const ArrayItem = ({
  data,
}: {
  data: {
    value: string;
    index?: number;
    pointers: string[];
    dataStructureName?: string;
  };
}) => {
  return (
    <>
      <div
        className={`relative grid place-content-center ${
          data.pointers.length === 0 ? "bg-blue-400" : "bg-blue-500"
        } text-md size-16 rounded-lg text-blue-50`}
      >
        {data.value}

        {data.index === 0 && (
          <div className="absolute -left-3/4 top-1/2 -translate-y-1/2 text-neutral-500">
            {data.dataStructureName}
          </div>
        )}

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

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500">
          {data.index}
        </div>
      </div>
    </>
  );
};
