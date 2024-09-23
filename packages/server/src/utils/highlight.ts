import highlight from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"

highlight.registerLanguage("javascript", javascript)

export const highlightSourceCode = (sourceCode: string) =>
  highlight.highlight(sourceCode, { language: "javascript" }).value
