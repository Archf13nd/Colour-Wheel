import { combineValues, polar2Cartesian } from "../util/mathUtil.js"
const getComplementaryCoords = (x,y, radius, cartesian2PolarMap) => {
    const polarCoords = cartesian2PolarMap[combineValues(x, y)]
    const complementaryPolarTheta = (polarCoords.theta + Math.PI) % (2 * Math.PI)
    const complementaryCartesianCoords = polar2Cartesian(polarCoords.r, complementaryPolarTheta, radius)

return  {main: {x, y}, complement: complementaryCartesianCoords}

}

export default getComplementaryCoords