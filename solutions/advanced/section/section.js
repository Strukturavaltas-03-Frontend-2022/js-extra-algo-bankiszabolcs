function getSectionOfTwoArrays (arr1, arr2) {
  const metszetArr = []
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[i] === arr2[k]) {
        metszetArr.push(arr2[k])
      }
    }
  }

  return metszetArr
}

export default getSectionOfTwoArrays
