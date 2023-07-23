const state = {
  canvas: null,
  ctx: null,
  events: {},
  wheelImage: null,
  targets: [],
  mouseX: null,
  mouseY: null,
  radius: null,
  mousedown: null,
  mouseup: null,
  harmony: 'triad'
}

const read = (key) => {
  if (key in state) {
    return state[key]
  } else {
    throw new Error(`Tried to access property ${key}. It doesn't exist`)
  }
}

const write = (key, value) => {
  if (key in state) {
    state[key] = value
  } else {
    throw new Error(`Tried to access property ${key}. It doesn't exist`)
  }
}

export default { write, read }
