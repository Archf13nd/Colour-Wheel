import generateWheel from './functions/services/generateWheelImage.js'
import createEvents from './functions/services/createEvents.js'
import {
  calcCircleBounds,
  cartesian2Polar,
  createCoordConversionMaps
} from './functions/util/mathUtil.js'

import drawTargets from './functions/services/drawTargets.js'
import mapCoords from './functions/services/mapCoords.js'

const state = {
  canvas: null,
  events: {},
  paths: {},
  mouseX: null,
  mouseY: null,
  radius: null,
  mousedown: null,
  mouseup: null,
  harmony: 'triad'
}

const targetElement = document.getElementById('color-wheel')
const targetElementHeight = targetElement.offsetHeight
const targetElementWidth = targetElement.offsetWidth

state.canvas = document.createElement('canvas')
state.ctx = state.canvas.getContext('2d')
const size = Math.min(targetElementHeight, targetElementWidth)
state.canvas.width = size
state.canvas.height = size
state.radius = size / 2

// Init conversion map inside mathUtil.js
createCoordConversionMaps(state.canvas.width, state.canvas.height, size / 2)

const wheelImage = generateWheel(state)
state.ctx.putImageData(wheelImage, 0, 0)

targetElement.insertAdjacentElement('beforeend', state.canvas)

state.events = createEvents(state.canvas)

const handleDraw = () => {
  if (!state.mousedown) {
    return
  }
  if (!calcCircleBounds(state.mouseX - state.radius, state.mouseY - state.radius, state.radius)) {
    return
  }
  if (state.paths) {
    state.ctx.putImageData(wheelImage, 0, 0)
  }
  const polarCoords = cartesian2Polar(state.mouseX, state.mouseY)
  const r = polarCoords.r
  const theta = polarCoords.theta
  const mappedCoords = mapCoords(r, theta, state.radius, state.harmony)
  drawTargets(state.ctx, mappedCoords)
}

// Event Actions
state.events.mousemove.updateMousePos = (e) => {
  state.mouseX = e.offsetX
  state.mouseY = e.offsetY
}

state.events.mousedown.recordMouseDown = () => {
  state.mousedown = true

  handleDraw()
}
state.events.mouseup.recordMouseUp = () => {
  state.mousedown = false
}

state.events.mousemove.moveTarget = () => {
  handleDraw()
}
