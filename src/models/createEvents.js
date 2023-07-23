const events = {}

const createEvent = (theEvent, cb, element) => {
  element.addEventListener(theEvent, cb)
  // Assigns the cb without removing any existing methods
  events[element.id] = { ...events[element.id] }
  events[element.id][theEvent] = { ...events[element.id][theEvent], eventCB: cb }
}

// Returns cb function used in event listeners
// while keeping id in memory with closure
const createCBfunction = (eventID) => {
  const id = eventID
  return (e) => {
    for (const key in events[id][e.type]) {
      if (key === 'eventCB') {
        continue
      }
      // Gets the events of element with id in function's lexical scope from closure
      // Gets the type of event registered, e.g. mousemove
      // Gets and calls each method stored within
      events[id][e.type][key](e)
    }
  }
}

const createEvents = (element, ...newEvents) => {
  newEvents.forEach((e) => {
    const cb = createCBfunction(element.id)
    createEvent(e, cb, element)
  })

  return events
}

export default createEvents
