export function findMiddle(list) {
  let fast = list.head;
  let slow = list.head;

  while (fast && fast.next) {
    fast = fast?.next?.next;
    slow = slow?.next;
  }

  return slow;
}
