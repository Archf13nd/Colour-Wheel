import updateHarmony from '../controllers/updateHarmony.js'
import updateTargets from '../controllers/updateTargets.js'

const click = (e) => {
  const id = e.target.id
  const harmony = id.match(/(complementary|triadic|analogous|tetradic)/g)[0]
  updateHarmony(harmony)
  updateTargets(true)
}

export default (e) => {
  const type = e.type

  if (type === 'click') click(e)
}
