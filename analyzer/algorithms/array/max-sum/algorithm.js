export function maxSum(arr, k) {
  debugger
  let max = 0
  let sum = 0

  // find initial sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += arr[i]
    max = sum
  }

  // iterate the array once
  // and increment the right edge
  for (let i = k; i < arr.length; i++) {
    const leftEdge = i - k
    sum += arr[i] - arr[leftEdge]

    // compare if sum is more than max,
    // if yes then replace
    // max with new sum value
    if (sum > max) {
      max = sum
    }
  }

  return max
}
