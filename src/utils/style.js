import { divide, multiply } from 'mathjs'
import store from '@/store'


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

export function getStyle(style, filter = []) {
    const result = {}
    Object.keys(style).forEach(key => {
        if (!filter.includes(key)) {
            if (key != 'rotate') {
                if (style[key] !== '') {
                    result[key] = style[key]

                    if (needUnit.includes(key)) {
                        result[key] += 'px'
                    }
                }
            } else {
                result.transform = key + '(' + style[key] + 'deg)'
            }
        }
    })

    return result
}

const needUnit = [
    'fontSize',
    'width',
    'height',
    'top',
    'left',
    'borderWidth',
    'letterSpacing',
    'borderRadius',
]

export function getShapeStyle(style) {
    const result = {};
    ['width', 'height', 'top', 'left', 'rotate'].forEach(attr => {
        if (attr != 'rotate') {
            result[attr] = style[attr] + 'px'
        } else {
            result.transform = 'rotate(' + style[attr] + 'deg)'
        }
    })

    return result
}

export function changeStyleWithScale(value) {
    return multiply(value, divide(parseInt(store.state.canvasStyleData.scale), 100))
}