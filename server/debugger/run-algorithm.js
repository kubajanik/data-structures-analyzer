import {
  lengthOfList,
  middleOfList,
  pushToEnd,
  removeDuplicatesFromSorted,
} from "./algorithms/index.js"

const algorithmName = process.argv[2]

const list = {
  _type: "singly-linked-list",
  head: {
    _type: "list-node",
    id: "1",
    value: "1",
    next: {
      _type: "list-node",
      id: "2",
      value: "2",
      next: {
        _type: "list-node",
        id: "3",
        value: "3",
        next: {
          _type: "list-node",
          id: "4",
          value: "4",
          next: {
            _type: "list-node",
            id: "5",
            value: "5",
            next: {
              _type: "list-node",
              id: "6",
              value: "6",
            },
          },
        },
      },
    },
  },
}

const duplicatedList = {
  _type: "singly-linked-list",
  head: {
    _type: "list-node",
    id: "1",
    value: "1",
    next: {
      _type: "list-node",
      id: "2",
      value: "2",
      next: {
        _type: "list-node",
        id: "2(1)",
        value: "2",
        next: {
          _type: "list-node",
          id: "2(2)",
          value: "2",
          next: {
            _type: "list-node",
            id: "5",
            value: "5",
            next: {
              _type: "list-node",
              id: "6",
              value: "6",
              next: {
                _type: "list-node",
                id: "7",
                value: "7",
              },
            },
          },
        },
      },
    },
  },
}

switch (algorithmName) {
  case "length-of-list":
    console.log(lengthOfList(list))
    break

  case "middle-of-list":
    console.log(middleOfList(list))
    break

  case "push-to-end":
    console.log(pushToEnd(list, "45"))
    break

  case "remove-duplicates-from-sorted":
    console.log(removeDuplicatesFromSorted(duplicatedList))
    break
}
