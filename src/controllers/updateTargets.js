import { calcCircleBounds } from '../util/mathUtil.js'
import { cartesian2Polar } from '../util/mathUtil.js'
import mapCoords from '../models/mapCoords.js'
import drawTargets from '../models/drawTargets.js'
import state from '../state.js'
import updateState from '../models/updateState.js'
import resetWheel from '../models/resetWheel.js'

export default (x, y) => {
  // Where on the canvas user clicked
  // Is click within bounds of wheel?
  // Update State
  // get position of main target
  // get position of secondary target/s
  // call update canvas with new data

  if (!calcCircleBounds(x - state.radius, y - state.radius, state.radius)) {
    return
  }
  if (!state.mousedown) {
    return
  }

  // Deletes current painted targets
  resetWheel()

  updateState({ key: 'mouseX', value: x }, { key: 'mouseY', value: y })

  //   r and theta are polar coordinates used in unit circle calculations
  const { r, theta } = cartesian2Polar(state.mouseX, state.mouseY)

  // Store new paths array in state
  const newTargets = mapCoords(r, theta, state.radius, state.harmony)
  updateState({ key: 'targets', value: newTargets })

  //   Paints new targets on canvas
  drawTargets(state.ctx, state.targets)
}
