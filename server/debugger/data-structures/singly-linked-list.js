import { ListNode } from "./list-node.js"

export class SinglyLinkedList {
  _type = "singly-linked-list"

  constructor(items) {
    for (const item of items.reverse()) {
      this.insert(item)
    }
  }

  insert(value) {
    const node = new ListNode(value)
    node.next = this.head
    this.head = node
  }
}
