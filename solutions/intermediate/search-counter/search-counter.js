function searchAndCount (arr, searchValue) {
  let finder = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) finder++
  }
  return finder
}

export default searchAndCount
