export function getSumOfTheElements (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

export function getAvarageOfTheElements (arr) {
  return getSumOfTheElements(arr) / arr.length
}
