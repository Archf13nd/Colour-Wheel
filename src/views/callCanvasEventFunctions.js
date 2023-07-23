import updateMousePosition from '../controllers/updateMousePosition.js'
import updateTargets from '../controllers/updateTargets.js'
// Only use state for view specific changes. i.e. updating mouseX or mousedown
import state from '../state.js'

const mouseMove = (e) => {
  updateMousePosition(e)
  updateTargets()
}

const mouseDown = () => {
  state.write('isMouseDown', true)
  updateTargets()
}

const mouseUp = () => {
  state.write('isMouseDown', false)
}

export default (e) => {
  const type = e.type
  if (type === 'mousemove') mouseMove(e)
  if (type === 'mousedown') mouseDown(e)
  if (type === 'mouseup') mouseUp(e)
}
