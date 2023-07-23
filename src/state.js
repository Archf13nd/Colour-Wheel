const state = {
  canvas: null,
  ctx: null,
  eventListeners: {},
  wheelImage: null,
  targets: [],
  mouseX: null,
  mouseY: null,
  radius: null,
  isMouseDown: null,
  harmony: 'triad',
  elements: [
    {
      id: 'color-wheel',
      events: ['mousemove', 'mousedown', 'mouseup']
    },
    {
      id: 'cw-btn-complementary',
      events: ['click']
    },
    {
      id: 'cw-btn-triad',
      events: ['click']
    },
    {
      id: 'cw-palette',
      events: ['click']
    }
  ]
}

const read = (key) => {
  if (key in state) {
    return state[key]
  } else {
    throw new Error(`Tried to read property ${key}. It doesn't exist`)
  }
}

const write = (key, value) => {
  if (key in state) {
    state[key] = value
  } else {
    throw new Error(`Tried to write property ${key}. It doesn't exist`)
  }
}

const writeEvent = (key, value) => {
  if (key in state.events) {
    state.events[key] = value
  } else {
    throw new Error(`Tried to write property ${key} in ${state.events}. It doesn't exist`)
  }
}

const readEvent = (key) => {
  if (key in state.events) {
    // Returns shallow copy. Opting out of deep copy for performance
    return { ...state.events[key] }
  } else {
    throw new Error(`Tried to read property ${key} in ${state.events}. It doesn't exist`)
  }
}

export default { write, read, writeEvent, readEvent }
