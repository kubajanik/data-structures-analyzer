import { randomUUID } from "crypto"

export class ListNode {
  _type = "list-node"

  constructor(value) {
    this.value = value
    this.id = randomUUID()
  }
}
