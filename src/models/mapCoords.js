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

const mapCoords = (r, theta, radius, type = 'complementary') => {
  // Index 0 is main target
  const coords = []
  const mainTarget = uncenterCartesianCoords(polar2Cartesian(r, theta), radius)
  coords.push(mainTarget)
  if (type === 'triad') coords.push(...getTriadCoords(r, theta, radius))
  if (type === 'complementary') coords.push(...getComplementaryCoords(r, theta, radius))

  return coords
}

export default mapCoords
