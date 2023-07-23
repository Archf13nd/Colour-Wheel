import updateHarmony from '../controllers/updateHarmony.js'
import updateTargets from '../controllers/updateTargets.js'

const click = (e) => {
  updateHarmony(e)
  updateTargets(true)
}

export default (e) => {
  const type = e.type

  if (type === 'click') click(e)
}
