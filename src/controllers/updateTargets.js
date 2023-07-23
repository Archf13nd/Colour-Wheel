import { calcCircleBounds } from '../util/mathUtil.js'
import { cartesian2Polar } from '../util/mathUtil.js'
import mapCoords from '../models/mapCoords.js'
import drawTargets from '../models/drawTargets.js'
import state from '../state.js'
import resetWheel from '../models/resetWheel.js'

export default (force = false) => {
  // Where on the canvas user clicked
  // Is click within bounds of wheel?
  // Update State
  // get position of main target
  // get position of secondary target/s
  // call update canvas with new data

  const x = state.read('mouseX')
  const y = state.read('mouseY')

  const radius = state.read('radius')
  if (!calcCircleBounds(x - radius, y - radius, radius)) {
    return
  }
  if (!state.read('isMouseDown') && !force) {
    return
  }

  // Deletes current painted targets
  const ctx = state.read('ctx')
  const wheelImage = state.read('wheelImage')

  resetWheel(ctx, wheelImage)

  state.write('mouseX', x)
  state.write('mouseY', y)

  //   r and theta are polar coordinates used in unit circle calculations
  const { r, theta } = cartesian2Polar(x, y)

  // Store new paths array in state
  const newTargets = mapCoords(r, theta, state.read('radius'), state.read('harmony'))
  state.write('targets', newTargets)

  //   Paints new targets on canvas
  drawTargets(state.read('ctx'), state.read('targets'))
}
