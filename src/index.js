import generateWheel from "./functions/services/generateWheel.js"
import createEvents from "./functions/services/createEvents.js"
import destroyEvents from "./functions/services/destroyEvents.js"

const targetElement = document.getElementById('color-wheel')
const targetElementHeight = targetElement.offsetHeight
const targetElementWidth = targetElement.offsetWidth

const canvas = document.createElement('canvas')
const size = Math.min(targetElementHeight, targetElementWidth)
canvas.width = size
canvas.height = size

const wheel = generateWheel(canvas)

targetElement.insertAdjacentElement('beforeend', wheel)

const eventData = createEvents(canvas)

canvas.addEventListener('mousedown', () => {
    console.log(eventData)
    
})

