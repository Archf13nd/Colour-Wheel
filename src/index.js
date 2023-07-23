import generateWheelImage from './models/generateWheelImage.js'
import createEvents from './models/createEvents.js'
import state from './state.js'
import registerElements from './models/registerElements.js'
import { createCoordConversionMaps } from './util/mathUtil.js'
import canvasEvents from './views/canvasEvents.js'

registerElements()

state.canvas = document.getElementById('color-wheel')
state.ctx = state.canvas.getContext('2d')
const size = Math.max(state.canvas.width, state.canvas.height)
if (state.canvas.width !== state.canvas.height) {
  state.canvas.width = size
  state.canvas.height = size
}
state.radius = size / 2

// Set default x and y positions
state.mouseX = state.radius
state.mouseY = state.radius - state.canvas.width / 5

// Init conversion map inside mathUtil.js
createCoordConversionMaps(state.canvas.width, state.canvas.height, size / 2)

state.wheelImage = generateWheelImage(state)
state.ctx.putImageData(state.wheelImage, 0, 0)

state.events = createEvents(state.canvas, 'mousedown', 'mouseup', 'mousemove')

console.log(state.events)

// state.events['cw-complementary-btn'].click.changeHarmony = () => {
//   state.harmony = 'complementary'
//   handleDraw()
// }
// state.events['cw-triad-btn'].click.changeHarmony = () => {
//   state.harmony = 'triad'
//   handleDraw()
// }
canvasEvents(state)
