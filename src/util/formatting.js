const formatRBGAString = (string) => {
  let numbers = string.slice(4, 17)
  numbers += ')'
  numbers = numbers.split(' ').join('')
  return numbers
}

export { formatRBGAString }
