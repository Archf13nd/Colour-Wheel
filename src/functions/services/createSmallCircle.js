const createSmallCircle = ({x,y},radius) => {


    const path = new Path2D()
    path.arc(x,y,radius,0, 2* Math.PI)
    return path
    }
    
    export default createSmallCircle