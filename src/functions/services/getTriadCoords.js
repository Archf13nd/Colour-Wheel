import { combineValues, polar2Cartesian } from "../util/mathUtil.js"
const getTriadCoords = (x,y, radius, cartesian2PolarMap) => {
    const polarCoords = cartesian2PolarMap[combineValues(x, y)]
    const triad1PolarTheta = (polarCoords.theta + Math.PI * 0.666) % (2 * Math.PI)
    const triad2PolarTheta = (polarCoords.theta + Math.PI * 1.333) % (2 * Math.PI)
    const triad1CartesianCoords = polar2Cartesian(polarCoords.r, triad1PolarTheta, radius)
    const triad2CartesianCoords = polar2Cartesian(polarCoords.r, triad2PolarTheta, radius)

    return  {main: {x, y}, triad1: triad1CartesianCoords, triad2: triad2CartesianCoords}
}

export default getTriadCoords