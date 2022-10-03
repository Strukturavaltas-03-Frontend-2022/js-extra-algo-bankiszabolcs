function linearSearch (arr, value) {
  let i = 0
  while (i < arr.length && arr[i] !== value) {
    i++
  }
  if (i === arr.length) return false
  else return true
}

export default linearSearch
