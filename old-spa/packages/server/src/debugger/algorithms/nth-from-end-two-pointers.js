export function nthFromEndTwoPointers(list, n) {
  debugger
  let main_ptr = list.head
  let ref_ptr = list.head

  let count = 0
  if (list.head) {
    while (count < n) {
      if (!ref_ptr) {
        throw new Error(`${n} is greater that length of list`)
      }

      ref_ptr = ref_ptr.next
      count++
    }

    if (!ref_ptr) {
      if (list.head) {
        return list.head
      }
    } else {
      while (ref_ptr) {
        main_ptr = main_ptr.next
        ref_ptr = ref_ptr.next
      }

      return main_ptr
    }
  }
}
