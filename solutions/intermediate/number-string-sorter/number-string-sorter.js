function numberAndStringSorter (arr) {
  const stringArr = []
  const numbArr = []
  arr.map(item => typeof item === 'string' ? stringArr.push(item) : numbArr.push(item))
  const numbArrLength = numbArr.length
  let k = 1
  for (let i = 0; i < numbArrLength; i++) {
    numbArr.splice((i + k), 0, stringArr[i])
    k++
  }
  return numbArr
}

export default numberAndStringSorter
