import createEvents from '../models/createEvents.js'
import createCanvasEventFunctions from './callCanvasEventFunctions.js'
import state from '../state.js'

const registerAllElements = () => {
  const elements = state.read('elements')
  elements.forEach((el) => {
    const element = document.getElementById(el.id)
    if (element) {
      for (let i = 0; i < el.events.length; i++) {
        const events = createEvents(element, el.events[i])
        state.write('eventListeners', events)
      }
      createCanvasEventFunctions(el.id)
    }
  })
}

export default registerAllElements
