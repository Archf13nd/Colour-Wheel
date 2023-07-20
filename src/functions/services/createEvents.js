import { calcCircleBounds } from "../util/mathUtil.js"

const eventsData = {
    element: null,
    activeListeners: {},
    x: 0,
    y: 0,
    click: false,
}

const registerEventFunctions = (element) => {
    const handleMouseMove = (e) => {
        if (!calcCircleBounds(e.offsetX, e.offsetY, element.width / 2)) {
             eventsData.x = e.offsetX
              eventsData.y = e.offsetY
            }
        }

    return [handleMouseMove]
}


const events = (element) => {
eventsData.element = element

const [handleMouseMove] = registerEventFunctions(element)


element.addEventListener('mousemove', handleMouseMove)
eventsData.activeListeners['mousemove'] = handleMouseMove

return eventsData
}


export default events