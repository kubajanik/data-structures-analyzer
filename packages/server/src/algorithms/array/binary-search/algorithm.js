export function binarySearch(arr, x) {
  debugger
  let low = 0
  let high = arr.length - 1

  while (high >= low) {
    const mid = low + Math.floor((high - low) / 2)

    if (arr[mid] == x) {
      return mid
    }

    if (arr[mid] > x) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}
