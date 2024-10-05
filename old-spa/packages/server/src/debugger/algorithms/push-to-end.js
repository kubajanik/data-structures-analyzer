import { ListNode } from "../../data-structures/list-node.js"

export function pushToEnd(list, newValue) {
  debugger
  const newNode = new ListNode(newValue)

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
