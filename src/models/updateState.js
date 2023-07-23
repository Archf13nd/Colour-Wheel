import state from '../state.js'
const updateState = (...newData) => {
  newData.forEach((data) => {
    if (state[data.key]) {
      state[data.key] = data.value
    } else {
      throw new Error("Tried to access property in state that doesn't exist")
    }
  })
}
export default updateState
