export function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap the elements at left and right position
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
}
