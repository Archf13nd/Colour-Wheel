import state from '../state.js'

export default (e) => {
  if (e.target.id === 'cw-btn-complementary') {
    state.write('harmony', 'complementary')
  }
  if (e.target.id === 'cw-btn-triad') {
    state.write('harmony', 'triad')
  }
}
