import createEvents from '../models/createEvents.js'
import createCanvasEventFunctions from './callCanvasEventFunctions.js'
import state from '../state.js'

const registerAllElements = () => {
  const elements = state.read('elements')
  elements.forEach((el) => {
    const element = state.read('root').getElementById(el.id)
    // Checks if element is present. If not nothing is generated for it
    if (element) {
      for (let i = 0; i < el.events.length; i++) {
        const events = createEvents(element, el.events[i])
        // TODO -> Prevent previous data being lost on rewrite
        // Important for destroying event listeners
        state.write('eventListeners', events)
      }
    }
  })
}

export default registerAllElements
