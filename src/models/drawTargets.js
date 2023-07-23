import createSmallCircle from './createSmallCircle.js'

const drawTargets = (ctx, coords) => {
  coords.forEach((e, i) => {
    let path
    if (i === 0) {
      path = createSmallCircle(e, 15)
    } else {
      path = createSmallCircle(e, 10)
    }
    ctx.stroke(path)
  })
}

export default drawTargets
