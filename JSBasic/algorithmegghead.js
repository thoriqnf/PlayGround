// recursive basic for dynamic
const items = [[1, 2, 3], [4, 5], [6, 7]]

function findSix(i) {
  let hasSix = "no!"
  i.forEach(a => {
    if (a === 6) {
      hasSix = "yes"
    }
    if (Array.isArray(a)) {
      hasSix = findSix(a)
    }
  })
  return hasSix
}

console.log(findSix(items));

//divide & conquer, find the nearest way
function sum(arr) {
  let total = 0
  for (let i of arr) {
    total += i
  }
  return total
}

console.log(sum([1, 2, 3, 4, 5]))
  ^ before divide & conquer


function sum(arr) {
  if (arr.length === 0) return 0
  return arr[0] + sum(arr.slice(1))
}

console.log(sum([1, 2, 3, 4, 5]))
  ^ after divide & conquer

//Create a selection sort function in javascript

const itemsToSort = [3, 2, 4, 6, 7, 9];

function findLargestValue(list) {
  let lrg = list[0]
  let indexOfLarge = 0
  for (let i = 1; i <= list.length; i++) {
    if (lrg < list[i]) {
      lrg = list[i]
      indexOfLarge = i
    }
  }
  return indexOfLarge
}

function selectionSort(list) {
  let newList = []
  let lrgItem
  while (list.length) {
    lrgItem = findLargestValue(list)
    newList.push(list[lrgItem])
    list.splice(lrgItem, 1)
  }
  return newList
}

console.log(selectionSort(itemsToSort))