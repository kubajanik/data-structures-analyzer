interface CodeViewerProps {
  sourceCode: string
  currentLine: number
}

export const CodeViewer = ({ sourceCode, currentLine }: CodeViewerProps) => {
  const lines = sourceCode.split("\n")

  return (
    <div className="pl-4 py-4">
      {lines.map((line, index) => (
        <div
          key={`line-${index}`}
          className={`flex flex-row gap-5 pl-4 rounded-md ${index + 1 === currentLine ? "bg-neutral-200" : ""}`}
        >
          <div className="text-neutral-500">{index + 1}</div>
          <pre>{line}</pre>
        </div>
      ))}
    </div>
  )
}
