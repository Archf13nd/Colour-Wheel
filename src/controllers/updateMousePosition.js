import state from '../state.js'
import { calcCircleBounds } from '../util/mathUtil.js'

export default ({ offsetX, offsetY }) => {
  const radius = state.read('radius')
  if (!calcCircleBounds(offsetX - radius, offsetY - radius, radius)) {
    return
  }
  if (!state.read('isMouseDown')) {
    return
  }

  state.write('mouseX', offsetX)
  state.write('mouseY', offsetY)
}
