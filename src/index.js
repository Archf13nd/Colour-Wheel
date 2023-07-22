import generateWheel from './functions/services/generateWheelImage.js'
import createEvents from './functions/services/createEvents.js'
import {
  calcCircleBounds,
  cartesian2Polar,
  createCoordConversionMaps
} from './functions/util/mathUtil.js'

import drawTargets from './functions/services/drawTargets.js'
import mapCoords from './functions/services/mapCoords.js'
import colourPicker from './functions/services/colourPicker.js'
import registerElements from './functions/ui/registerElements.js'

const state = {
  canvas: null,

  events: {},
  targets: [],
  mouseX: null,
  mouseY: null,
  radius: null,
  mousedown: null,
  mouseup: null,
  harmony: 'triad'
}

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

const wheelImage = generateWheel(state)
state.ctx.putImageData(wheelImage, 0, 0)

state.events = createEvents(state.canvas, 'mousedown', 'mouseup', 'mousemove')

console.log(state.events)

const handleDraw = () => {
  state.ctx.putImageData(wheelImage, 0, 0)

  const polarCoords = cartesian2Polar(state.mouseX, state.mouseY)
  const r = polarCoords.r
  const theta = polarCoords.theta
  // Store paths array in state for colour picker
  state.targets = mapCoords(r, theta, state.radius, state.harmony)

  drawTargets(state.ctx, state.targets)
  colourPicker(state.ctx, state.targets)
}

// Event Actions
state.events['color-wheel'].mousemove.updateMousePos = (e) => {
  if (!state.mousedown) {
    return
  }
  if (calcCircleBounds(e.offsetX - state.radius, e.offsetY - state.radius, state.radius)) {
    state.mouseX = e.offsetX
    state.mouseY = e.offsetY
  }
}

state.events['color-wheel'].mousedown.recordMouseDown = () => {
  state.mousedown = true

  handleDraw()
}
state.events['color-wheel'].mouseup.recordMouseUp = () => {
  state.mousedown = false
}

state.events['color-wheel'].mousemove.moveTarget = () => {
  if (state.mousedown) {
    handleDraw()
  }
}

state.events['cw-complementary-btn'].click.changeHarmony = () => {
  state.harmony = 'complementary'
  handleDraw()
}
state.events['cw-triad-btn'].click.changeHarmony = () => {
  state.harmony = 'triad'
  handleDraw()
}

handleDraw()
