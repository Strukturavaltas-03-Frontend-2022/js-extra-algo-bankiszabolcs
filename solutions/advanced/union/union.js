
function getUnionOfTwoArrays (arr1, arr2) {
  const unio = [...arr1]

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) unio.push(arr2[i])
  }
  return unio
}

export default getUnionOfTwoArrays
