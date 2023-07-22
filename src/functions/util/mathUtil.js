// STATE
const cartesian2PolarMap = {}

const calcHypotenuse = (x, y) => {
  // Pythagorean Theorem a^2 + b^2 = c^2
  return Math.sqrt(x * x + y * y)
}

const calcAngleRadians = (x, y) => {
  return Math.atan2(y, x)
}

const calcAngleDegrees = (x, y) => {
  const radians = calcAngleRadians(x, y)
  // Convert radians to degrees
  return (180 / Math.PI) * (radians + Math.PI)
}

const calcCircleBounds = (x, y, radius) => {
  const r = calcHypotenuse(x, y)
  return r < radius
}

// polar2Cartesian converts to cartesian coords with 0 at centre.
// This brings 0 back to top left
const uncenterCartesianCoords = ({ x, y }, radius) => {
  y = y + radius
  x = x + radius
  return { x, y }
}

const polar2Cartesian = (r, theta) => {
  const x = r * Math.cos(theta)
  const y = r * Math.sin(theta)
  return { x, y }
}

const cartesian2Polar = (x, y) => {
  return cartesian2PolarMap[combineValues(x, y)]
}

const combineValues = (x, y) => {
  return (x << 16) | y
}

// Maps each cartesian coord to a polar coord. The key is a mapping of the x and y values
// and to retrieve polar coords you must use the combineValues function in mathUtils.js
const createCoordConversionMaps = (width, height, radius) => {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const r = calcHypotenuse(x - radius, y - radius)
      const theta = calcAngleRadians(x - radius, y - radius)
      cartesian2PolarMap[combineValues(x, y)] = { r, theta }
    }
  }
}

export {
  calcHypotenuse,
  calcAngleDegrees,
  calcCircleBounds,
  createCoordConversionMaps,
  combineValues,
  polar2Cartesian,
  cartesian2Polar,
  uncenterCartesianCoords
}
