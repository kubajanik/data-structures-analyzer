import { Fragment } from "react"

import "highlight.js/styles/atom-one-light.css"

interface Props {
  sourceCode: string
  currentLine: number
}

export const CodeViewer = ({ sourceCode, currentLine }: Props) => {
  return (
    <div className="relative border border-neutral-100 border-r-0">
      <pre className="absolute top-0 w-full p-4 text-sm">
        <code dangerouslySetInnerHTML={{ __html: sourceCode }} />
      </pre>

      <LineHighlight sourceCode={sourceCode} currentLine={currentLine} />
    </div>
  )
}

const LineHighlight = ({ sourceCode, currentLine }: Props) => {
  const lineNumbers = getLineNumbers(sourceCode)

  return (
    <pre className="pointer-events-none select-none py-4 text-sm">
      {lineNumbers.map((line) => (
        <Fragment key={line}>
          <span
            className={`inline-block w-full ${currentLine === line ? "bg-neutral-100" : ""}`}
          >
            {" "}
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
