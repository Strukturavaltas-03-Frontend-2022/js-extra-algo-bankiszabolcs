import customSort from './../custom-sort/custom-sort.js'

function insertionSort (arr) {
  let sortedArr = customSort(arr)
  const numb = parseInt(prompt('Write a number', '123'))
  if (typeof numb === 'number') {
    sortedArr.push(numb)
    const againSortedArr = customSort(sortedArr)
    return againSortedArr
  } else {
    return ''
  }
}

export default insertionSort
