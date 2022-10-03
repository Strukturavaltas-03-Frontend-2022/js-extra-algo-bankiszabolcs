import customSort from './../custom-sort/custom-sort.js'

function getNthLargestElement (arr, nth) {
  const sortedArr = customSort(arr)
  return sortedArr[sortedArr.length - nth]
}

export default getNthLargestElement
