import updateTargets from '../controllers/updateTargets.js'

export default (canvasEvents) => {
  console.log(canvasEvents)

  canvasEvents.mousemove.updateMousePos = (e) => {
    updateTargets(e.offsetX, e.offsetY)
  }

  canvasEvents.mousedown.recordMouseDown = (e) => {
    updateTargets(e.offsetX, e.offsetY)
  }
  canvasEvents.mouseup.recordMouseUp = () => {}

  canvasEvents.mousemove.moveTarget = (e) => {
    updateTargets(e.offsetX, e.offsetY)
  }
}
