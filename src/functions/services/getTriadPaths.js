import createSmallCircle from "./createSmallCircle.js"

const getTriadPaths = (coords) => {
    const mainCircleCoords = coords.main
    const Triad1CircleCoords = coords.triad1
    const Triad2CircleCoords = coords.triad2
    const mainCircle = createSmallCircle(mainCircleCoords, 15)
    const triad1Circle = createSmallCircle(Triad1CircleCoords, 10)
    const triad2Circle = createSmallCircle(Triad2CircleCoords, 10)
    return {mainCircle, triad1Circle, triad2Circle}
}

export default getTriadPaths