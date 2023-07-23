import generateWheelImage from './models/generateWheelImage.js'
import createEvents from './models/createEvents.js'
import state from './state.js'
import registerElements from './models/registerElements.js'
import { createCoordConversionMaps } from './util/mathUtil.js'
import initCanvasEvents from './views/canvasEvents.js'

registerElements()

const canvas = document.getElementById('color-wheel')
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

const events = createEvents(canvas, 'mousedown', 'mouseup', 'mousemove')
state.write('events', events)

// state.events['cw-complementary-btn'].click.changeHarmony = () => {
//   state.harmony = 'complementary'
//   handleDraw()
// }
// state.events['cw-triad-btn'].click.changeHarmony = () => {
//   state.harmony = 'triad'
//   handleDraw()
// }
initCanvasEvents(events['color-wheel'])
