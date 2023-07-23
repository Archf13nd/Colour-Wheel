import callCanvasEventFunctions from '../views/callCanvasEventFunctions.js'
import callButtonEventFunctions from '../views/callButtonEventFunctions.js'

const createEvent = (theEvent, cb, element) => {
  element.addEventListener(theEvent, cb)
  // Assigns the cb without removing any existing methods
  return { theEvent, cb }
}

// Returns cb function used in event listeners
// while keeping id in memory with closure
const createCBfunction = (element) => {
  const tag = element.tagName

  return (e) => {
    if (tag === 'CANVAS') {
      callCanvasEventFunctions(e)
    }
    if (tag === 'BUTTON') {
      callButtonEventFunctions(e)
    }
  }
}

const createEvents = (element, newEvent) => {
  const cb = createCBfunction(element)
  return createEvent(newEvent, cb, element)
}

export default createEvents
