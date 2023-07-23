// INCOMPLETE MODULE ///////////////////////////

const colourPicker = (ctx, targets) => {
  const colours = []
  targets.forEach((e) => {
    const pixelData = ctx.getImageData(e.x, e.y, 1, 1).data
    colours.push(`rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3] / 255})`)
  })
  return colours
}

export default colourPicker
