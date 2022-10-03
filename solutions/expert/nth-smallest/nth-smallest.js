import customSort from './../custom-sort/custom-sort.js'

function getNthSmallestElement (arr, nth) {
  const sortedArr = customSort(arr)

  return sortedArr[nth - 1]
}

export default getNthSmallestElement
