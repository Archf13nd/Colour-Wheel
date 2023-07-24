import { polar2Cartesian, uncenterCartesianCoords } from '../util/mathUtil.js'

const getTriadCoords = (r, theta, radius) => {
  const triad1PolarTheta = (theta + Math.PI * 0.666) % (2 * Math.PI)
  const triad2PolarTheta = (theta + Math.PI * 1.333) % (2 * Math.PI)
  const triad1Coords = uncenterCartesianCoords(polar2Cartesian(r, triad1PolarTheta), radius)
  const triad2Coords = uncenterCartesianCoords(polar2Cartesian(r, triad2PolarTheta), radius)
  return [triad1Coords, triad2Coords]
}

const getComplementaryCoords = (r, theta, radius) => {
  const complementaryPolarTheta = (theta + Math.PI) % (2 * Math.PI)
  const complementaryCoords = uncenterCartesianCoords(
    polar2Cartesian(r, complementaryPolarTheta),
    radius
  )

  return [complementaryCoords]
}
const getAnalogousCoords = (r, theta, radius) => {
  const analogous1PolarTheta = (theta + Math.PI / 6) % (2 * Math.PI)
  const analogous2PolarTheta = (theta + Math.PI / -6) % (2 * Math.PI)
  const analogous1Coords = uncenterCartesianCoords(polar2Cartesian(r, analogous1PolarTheta), radius)
  const analogous2Coords = uncenterCartesianCoords(polar2Cartesian(r, analogous2PolarTheta), radius)

  return [analogous1Coords, analogous2Coords]
}
const getTetradicCoords = (r, theta, radius) => {
  const tetradic1PolarTheta = (theta + Math.PI / 2) % (2 * Math.PI)
  const tetradic2PolarTheta = (theta + Math.PI) % (2 * Math.PI)
  const tetradic3PolarTheta = (theta - Math.PI / 2) % (2 * Math.PI)
  const tetradic1Coords = uncenterCartesianCoords(polar2Cartesian(r, tetradic1PolarTheta), radius)
  const tetradic2Coords = uncenterCartesianCoords(polar2Cartesian(r, tetradic2PolarTheta), radius)
  const tetradic3Coords = uncenterCartesianCoords(polar2Cartesian(r, tetradic3PolarTheta), radius)

  return [tetradic1Coords, tetradic2Coords, tetradic3Coords]
}

const mapCoords = (r, theta, radius, type = 'complementary') => {
  // Index 0 is main target
  const coords = []
  const mainTarget = uncenterCartesianCoords(polar2Cartesian(r, theta), radius)
  coords.push(mainTarget)
  if (type === 'triadic') coords.push(...getTriadCoords(r, theta, radius))
  if (type === 'complementary') coords.push(...getComplementaryCoords(r, theta, radius))
  if (type === 'analogous') coords.push(...getAnalogousCoords(r, theta, radius))
  if (type === 'tetradic') coords.push(...getTetradicCoords(r, theta, radius))

  return coords
}

export default mapCoords
