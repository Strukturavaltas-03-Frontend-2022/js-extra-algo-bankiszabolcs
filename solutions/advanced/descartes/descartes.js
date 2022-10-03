function getCartesianProductBetweenTwoArrays (arr1, arr2) {
  const sum = []
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      sum.push(arr1[i] * arr2[k])
    }
  }
  return sum
}

export default getCartesianProductBetweenTwoArrays
