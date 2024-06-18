import {
  lengthOfList,
  middleOfList,
  pushToEnd,
  removeDuplicatesFromSorted,
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
}
