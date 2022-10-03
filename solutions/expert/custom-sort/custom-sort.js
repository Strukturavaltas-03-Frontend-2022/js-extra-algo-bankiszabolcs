function customSort (arr) {
  const numbArr = arr.filter(element => typeof element === 'number')
  const stringArr = arr.filter(element => typeof element !== 'number')
  for (let i = 0; i < numbArr.length; i++) {
    for (let k = 0; k < (numbArr.length - i - 1); k++) {
      if (numbArr[k] > numbArr[k + 1]) { [numbArr[k], numbArr[k + 1]] = [numbArr[k + 1], numbArr[k]] }
    }
  }
  const finalArr = [...numbArr, ...stringArr]

  return finalArr
}

export default customSort
