const calcHypotenuse = (x,y) => {
    // Pythagorean Theorem a^2 + b^2 = c^2
    return Math.sqrt(x*x + y*y)
}


const calcAngleDegrees = (x, y) => {
    const radians = Math.atan2(y, x)
    // Convert radians to degrees
    return (180 / Math.PI) * (radians + Math.PI)
}

const calcCircleBounds = (x, y, radius) => {
    const r = calcHypotenuse(x, y)
    return r < radius
}

export {calcHypotenuse, calcAngleDegrees, calcCircleBounds}