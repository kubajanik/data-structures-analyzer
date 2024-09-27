import {
  lengthOfList,
  middleOfList,
  pushToEnd,
  removeDuplicatesFromSorted,
  nthFromEndTwoPointers,
  reverseArray,
  arrayBinarySearch
} from "./algorithms/index.js"
import { SinglyLinkedList } from "./data-structures/index.js"

const algorithmName = process.argv[2]

switch (algorithmName) {
  case "length-of-list":
    {
      const list = new SinglyLinkedList(["1", "2", "3", "4", "5"])
      lengthOfList(list)
    }
    break

  case "middle-of-list":
    {
      const list = new SinglyLinkedList(["1", "2", "3", "4", "5"])
      middleOfList(list)
    }
    break

  case "push-to-end":
    {
      const list = new SinglyLinkedList(["1", "2", "3"])
      pushToEnd(list, "4")
    }
    break

  case "remove-duplicates-from-sorted":
    {
      const list = new SinglyLinkedList(["1", "2", "2", "2", "3", "4", "5"])
      removeDuplicatesFromSorted(list)
    }
    break

  case "nth-from-end-two-pointers":
    {
      const list = new SinglyLinkedList(["1", "2", "3", "4", "5", "6"])
      nthFromEndTwoPointers(list, 3)
    }
    break
  case "array-in-place-reverse": 
    {
      reverseArray([1, 2, 3, 4, 5]);
    }
    break;
  case "array-binary-search": 
    {
      arrayBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
    }
    break;
}
