export function lengthOfList(list) {
  debugger
  let length = 0
  let current = list.head

  while (current) {
    length++
    current = current.next
  }

  return length
}
