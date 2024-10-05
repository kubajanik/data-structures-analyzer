export function reverseArray(arr) {
  debugger
  const n = arr.length

  for (let i = 0; i < n / 2; i++) {
    const temp = arr[i]
    const opposite = n - i - 1
    arr[i] = arr[opposite]
    arr[opposite] = temp
  }

  return arr
}
