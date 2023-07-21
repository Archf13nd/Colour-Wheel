const drawPaths = ({ctx, paths}) => {
    for (const key in paths) {
        ctx.stroke(paths[key])
    }
}
export default drawPaths