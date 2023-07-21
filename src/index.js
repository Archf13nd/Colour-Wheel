import generateWheel from './functions/services/generateWheelImage.js'
import createEvents from './functions/services/createEvents.js'
import { calcCircleBounds, createCoordConversionMaps } from './functions/util/mathUtil.js'
import drawPaths from './functions/services/drawPaths.js'
import getComplementaryCoords from './functions/services/getComplementaryCoords.js'
import getComplementaryPaths from './functions/services/getComplementaryPaths.js'
import getTriadCoords from './functions/services/getTriadCoords.js'
import getTriadPaths from './functions/services/getTriadPaths.js'

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

const coordConversionMaps = createCoordConversionMaps(
  state.canvas.width,
  state.canvas.height,
  size / 2
)
state.cartesian2PolarMap = coordConversionMaps.cartesian2PolarCoords

const wheelImage = generateWheel(state)
state.ctx.putImageData(wheelImage, 0, 0)

targetElement.insertAdjacentElement('beforeend', state.canvas)

state.events = createEvents(state.canvas)

const drawTargets = () => {
  if (!state.mousedown) {
    return
  }
  if (!calcCircleBounds(state.mouseX - state.radius, state.mouseY - state.radius, state.radius)) {
    return
  }
  if (state.paths) {
    state.ctx.putImageData(wheelImage, 0, 0)
  }

  if (state.harmony === 'complementary') {
    const compCoords = getComplementaryCoords(
      state.mouseX,
      state.mouseY,
      state.radius,
      state.cartesian2PolarMap
    )
    state.paths = getComplementaryPaths(compCoords)
  } else if (state.harmony === 'triad') {
    const triadCoords = getTriadCoords(
      state.mouseX,
      state.mouseY,
      state.radius,
      state.cartesian2PolarMap
    )
    state.paths = getTriadPaths(triadCoords)
  }
  drawPaths(state)
}

// Event Actions
state.events.mousemove.updateMousePos = (e) => {
  state.mouseX = e.offsetX
  state.mouseY = e.offsetY
}

state.events.mousedown.recordMouseDown = () => {
  state.mousedown = true
  drawTargets()
}
state.events.mouseup.recordMouseUp = () => {
  state.mousedown = false
}

state.events.mousemove.moveTarget = () => {
  drawTargets()
}
