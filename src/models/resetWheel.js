import state from '../state.js'

const resetWheel = () => {
  state.ctx.putImageData(state.wheelImage, 0, 0)
}

export default resetWheel
