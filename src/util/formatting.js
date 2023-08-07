const formatRBGAString = (string) => {
  const endString = string.lastIndexOf(',')
  let numbers = string.slice(4, endString)
  numbers += ')'
  numbers = numbers.split(' ').join('')
  return numbers
}

export { formatRBGAString }
