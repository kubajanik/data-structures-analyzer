import highlight from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"

highlight.registerLanguage("javascript", javascript)

export const highlightSourceCode = (sourceCode: string): string => {
  const result = highlight.highlight(sourceCode, { language: "javascript" })
  return result.value
}
