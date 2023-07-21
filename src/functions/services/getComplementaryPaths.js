import createSmallCircle from './createSmallCircle.js'

const getComplementaryPaths = (coords) => {
  const mainCircleCoords = coords.main
  const complementaryCircleCoords = coords.complement
  const mainCircle = createSmallCircle(mainCircleCoords, 15)
  const complementaryCircle = createSmallCircle(complementaryCircleCoords, 10)
  return { mainCircle, complementaryCircle }
}

export default getComplementaryPaths
