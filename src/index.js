import updateTargets from './controllers/updateTargets.js'
import generateWheelImage from './models/generateWheelImage.js'
import state from './state.js'
import { createCoordConversionMaps } from './util/mathUtil.js'
import registerAllElements from './views/registerAllElements.js'

// registerElements()
const init = (root) => {
  // Sets the apps root if given. Useful for encapsulating component to shadowDom
  if (root) {
    state.write('root', root)
  } else {
    state.write('root', document)
  }

  const canvas = state.read('root').getElementById('color-wheel')
  const ctx = canvas.getContext('2d')
  state.write('canvas', canvas)
  state.write('ctx', ctx)

  const size = Math.max(canvas.width, canvas.height)
  if (canvas.width !== canvas.height) {
    canvas.width = size
    canvas.height = size
  }
  const radius = size / 2
  state.write('radius', radius)

  // Set default x and y positions
  state.write('mouseX', radius)
  state.write('mouseY', radius - canvas.width / 5)

  // Init conversion map inside mathUtil.js
  createCoordConversionMaps(canvas.width, canvas.height, size / 2)

  const wheelImage = generateWheelImage(canvas, ctx)
  state.write('wheelImage', wheelImage)
  ctx.putImageData(wheelImage, 0, 0)

  registerAllElements()

  updateTargets(true)

  return state
}
export default init
