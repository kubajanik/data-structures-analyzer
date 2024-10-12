export function insertItem(arr, x, k) {
  for (let i = arr.length - 1; i >= k; i--) {
    arr[i + 1] = arr[i];
  }

  arr[k] = x;
}
