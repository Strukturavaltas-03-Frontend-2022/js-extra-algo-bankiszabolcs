function getOddEvenElements (arr) {
  const oddArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) oddArr.push(arr[i])
  }
  return oddArr
}

export default getOddEvenElements
