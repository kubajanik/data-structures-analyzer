export function pushZerosToEnd(arr) {
  debugger;
  // Pointer to track the position for next non-zero element
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // Swap the current element with the 0 at index 'count'
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
}
