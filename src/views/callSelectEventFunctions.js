import updateHarmony from '../controllers/updateHarmony.js'
import updateTargets from '../controllers/updateTargets.js'

const change = (e) => {
  const harmony = e.target.value.toLowerCase()
  updateHarmony(harmony)
  updateTargets(true)
}

export default (e) => {
  const type = e.type

  if (type === 'change') change(e)
}
