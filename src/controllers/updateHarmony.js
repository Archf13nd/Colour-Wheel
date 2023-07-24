import state from '../state.js'

export default (harmony) => {
  if (harmony === 'complementary') {
    state.write('harmony', 'complementary')
  }
  if (harmony === 'triadic') {
    state.write('harmony', 'triadic')
  }
  if (harmony === 'analogous') {
    state.write('harmony', 'analogous')
  }
  if (harmony === 'tetradic') {
    state.write('harmony', 'tetradic')
  }
}
