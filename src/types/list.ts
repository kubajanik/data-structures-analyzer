export interface ListNode {
  _type: "list-node";
  id: string;
  value: string;
  next?: ListNode;
}

export interface SinglyLinkedList {
  _type: "singly-linked-list";
  head: ListNode;
}
