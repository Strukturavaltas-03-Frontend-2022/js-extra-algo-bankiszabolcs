function getCountOfTheEvenElements (arr) {
  const evenNumbs = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenNumbs.push(arr[i])
  }
  return evenNumbs.length
}

export default getCountOfTheEvenElements
