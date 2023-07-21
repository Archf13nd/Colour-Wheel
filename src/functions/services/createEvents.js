const events = {}

const createEvent = (theEvent, func, element) => {
element.addEventListener(theEvent, func)
// Assigns the cb without removing any existing methods
events[theEvent] = {...events[theEvent], eventCB: func}
}

const callFunctions = (e) => {
for (const key in events[e.type]) {
    if (key === 'eventCB') {
        continue
    }
    events[e.type][key](e)
    }
}



const createEvents = (element) => {

createEvent('mousemove', callFunctions, element)
createEvent('mousedown', callFunctions, element)
createEvent('mouseup', callFunctions, element)
return events
}


export default createEvents