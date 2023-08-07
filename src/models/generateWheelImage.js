import convertHSV2RGB from '../util/convertHSV2RGB.js'
import { calcAngleDegrees, calcCircleBounds, calcHypotenuse } from '../util/mathUtil.js'

export default (canvas, ctx) => {
  if (canvas.width !== canvas.height) {
    throw new Error('Canvas width is not equal to canvas height')
  }

  const radius = canvas.width / 2
  const image = ctx.createImageData(2 * radius, 2 * radius)

  // Traverses each pixel one line at a time left to right
  for (let x = -radius; x < radius; x += 1) {
    for (let y = -radius; y < radius; y += 1) {
      if (!calcCircleBounds(x, y, radius)) {
        continue
      }

      // Get's the current line and position on it
      // Multiplies by 4 because every pixel is represented by 4 colour channels
      const index = (radius * 2 * (x + radius) + (y + radius)) * 4
      // Hue is degrees around circle
      const hue = Math.floor(calcAngleDegrees(x, y))
      const r = calcHypotenuse(x, y)
      // Saturation is highest when r is closest to radius
      const saturation = r / radius

      let [red, green, blue] = convertHSV2RGB(hue, saturation, 1)

      let alpha = 255
      if (saturation > 0.993 && saturation < 0.995) {
        alpha = 160
      } else if (saturation > 0.995) {
        alpha = 60
      }

      image.data[index + 0] = red
      image.data[index + 1] = green
      image.data[index + 2] = blue
      image.data[index + 3] = alpha
    }
  }
  return image
}
