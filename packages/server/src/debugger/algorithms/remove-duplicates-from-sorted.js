export function removeDuplicatesFromSorted(list) {
  debugger
  let current = list.head

  while (current) {
    let temp = current

    while (temp && temp.value == current.value) {
      temp = temp.next
    }

    current.next = temp
    current = current.next
  }
}
