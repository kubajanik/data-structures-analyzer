export function pushToEnd(list, value) {
  debugger
  const newNode = { _type: "list-node", value }

  if (list.head == null) {
    list.head = newNode
    return
  }

  let last = list.head
  while (last.next) {
    last = last.next
  }

  last.next = newNode
}
