function getTheEvenElements (arr) {
  const evenArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenArr.push(arr[i])
  }
  return evenArr
}

export default getTheEvenElements
