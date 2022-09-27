const filterKeys = ['width', 'height', 'scale']
export function getCanvasStyle(canvasStyleData) {
    const result = {}
    Object.keys(canvasStyleData).filter(key => !filterKeys.includes(key)).forEach(key => {
        result[key] = canvasStyleData[key]
        if (key === 'fontSize') {
            result[key] += 'px'
        }
    })
    return result
}