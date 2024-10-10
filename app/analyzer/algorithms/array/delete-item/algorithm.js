export function deleteItem(arr, k) {
  debugger;
  for (let i = k; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  
  arr.length--
}
