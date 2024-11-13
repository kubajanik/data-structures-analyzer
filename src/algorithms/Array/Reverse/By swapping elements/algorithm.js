export function reverseArray(arr) {
  let n = arr.length;
  let x;

  for (let i = 0; i < n / 2; i++) {
    x = n - i - 1;
    [arr[i], arr[x]] = [arr[x], arr[i]];
  }
}
