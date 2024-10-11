export function pushZerosToEnd(arr) {
  debugger;
  const n = arr.length;
  const temp = new Array(n);

  // to keep track of the index in temp[]
  let j = 0;

  // Copy non-zero elements to temp[]
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp[j] = arr[i];
      j++;
    }
  }

  // Fill remaining positions in temp[] with zeros
  while (j < n) {
    temp[j] = 0;
    j++;
  }

  // Copy all the elements from temp[] to arr[]
  for (let k = 0; k < n; k++) {
    arr[k] = temp[k];
  }
}
