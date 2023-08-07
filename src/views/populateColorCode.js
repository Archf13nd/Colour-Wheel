import state from '../state.js'
import { formatRBGAString } from '../util/formatting.js'
const populateColorCodes = () => {
  const codeContainer = state.read('root').getElementById('cw-color-codes')
  codeContainer.innerText = ''
  const colors = state.read('colors')
  console.log(colors)
  colors.forEach((col) => {
    const newString = formatRBGAString(col)

    codeContainer.insertAdjacentHTML('beforeend', `<div>${newString}</div>`)
  })
}

export default populateColorCodes
