export function isVariableUsedInCurrentLine(
  line: string,
  variable: string
): boolean {
  const regex = new RegExp(`\\b${variable}\\b`)
  return regex.test(line)
}
