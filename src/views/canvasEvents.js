import updateTargets from '../controllers/updateTargets.js'

export default (state) => {
  state.events['color-wheel'].mousemove.updateMousePos = (e) => {
    updateTargets(e.offsetX, e.offsetY)
  }

  state.events['color-wheel'].mousedown.recordMouseDown = (e) => {
    state.mousedown = true
    updateTargets(e.offsetX, e.offsetY)
  }
  state.events['color-wheel'].mouseup.recordMouseUp = () => {
    state.mousedown = false
  }

  state.events['color-wheel'].mousemove.moveTarget = (e) => {
    if (state.mousedown) {
      updateTargets(e.offsetX, e.offsetY)
    }
  }
}
