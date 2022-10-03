function binarySearch (arr, search) {
  let first = 0
  let last = arr.length

  while (first <= last) {
    let i = Math.floor((first + last) / 2)
    if (arr[i] === search) return true
    else if (arr[i] > search) last = i - 1
    else if (arr[i] < search) first = i + 1
  }
  return false
}

export default binarySearch
