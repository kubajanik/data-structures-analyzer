export function arrayBubbleSort(arr) {
  debugger
  let checked

  do {
    checked = false
    for (let i = 0; i < arr.length; i++) {
      const next = i + 1
      if (arr[i] > arr[next]) {
        let tmp = arr[i]
        arr[i] = arr[next]
        arr[next] = tmp
        checked = true
      }
    }
  } while (checked)

  return arr
}
