export function reverseArray(arr) {
  let n = arr.length;
  let temp = new Array(n);

  // Copy elements from original array to temp in reverse order
  for (let i = 0; i < n; i++) {
    temp[i] = arr[n - i - 1];
  }

  // Copy elements back to original array
  for (let k = 0; k < n; k++) {
    arr[k] = temp[k];
  }
}
