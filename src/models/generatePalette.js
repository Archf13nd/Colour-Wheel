const generatePalette = (colours) => {
  const numColors = colours.length
  const patchSize = 100 / numColors
  let linearGradient = `linear-gradient(90deg,`
  colours.forEach((col, i) => {
    linearGradient += `${col} ${Math.floor(patchSize * i)}%, ${col} ${Math.floor(
      patchSize * (i + 1)
    )}%`
    if (i < numColors - 1) {
      linearGradient += `,`
    } else {
      linearGradient += `)`
    }
  })

  return linearGradient
}

export default generatePalette
