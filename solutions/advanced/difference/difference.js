function getTheDifferenceBetweenTwoArrays (arr1, arr2) {
  const newArr = []
  for (let k = 0; k < arr1.length; k++) {
    let i = 0
    while (i < arr2.length && arr2[i] !== arr1[k]) {
      i++
    }
    if (i === arr2.length) newArr.push(arr1[k])
  }
  return newArr
}

export default getTheDifferenceBetweenTwoArrays
