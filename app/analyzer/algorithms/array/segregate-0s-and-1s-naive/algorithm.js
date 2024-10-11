export function segregate0and1(arr) {
  debugger;
  // Counts the no of zeros in arr
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    }
  }

  // Loop fills the arr with 0 until count
  for (let i = 0; i < count; i++) {
    arr[i] = 0;
  }

  // Loop fills remaining arr space with 1
  for (let i = count; i < arr.length; i++) {
    arr[i] = 1;
  }
}
