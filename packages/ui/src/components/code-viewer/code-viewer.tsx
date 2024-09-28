import { Fragment } from "react"

import "highlight.js/styles/atom-one-dark.css"

interface Props {
  sourceCode: string
  currentLine: number
}

export const CodeViewer = ({ sourceCode, currentLine }: Props) => {
  return (
    <div className="h-full relative bg-neutral-50 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-300">
      <pre className="absolute top-0 w-full p-2 pl-8 text-xs overflow-auto">
        <code dangerouslySetInnerHTML={{ __html: sourceCode }} />
      </pre>

      <LineHighlight sourceCode={sourceCode} currentLine={currentLine} />
    </div>
  )
}

const LineHighlight = ({ sourceCode, currentLine }: Props) => {
  const lineNumbers = getLineNumbers(sourceCode)

  return (
    <pre className="pointer-events-none select-none py-2 text-xs">
      {lineNumbers.map((line) => (
        <Fragment key={line}>
          <span
            className={`inline-block w-full pl-2 text-neutral-500 ${currentLine === line ? "bg-neutral-100 dark:bg-neutral-800" : ""}`}
          >
            <span className="inline-block w-3 text-right">{line}</span>
          </span>
          {"\n"}
        </Fragment>
      ))}
    </pre>
  )
}

const getLineNumbers = (sourceCode: string): number[] => {
  return sourceCode.split("\n").map((_, index) => index + 1)
}
