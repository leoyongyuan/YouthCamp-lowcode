import Vue from 'vue'


export function deepCopy(target, hash_table = new WeakMap()) {
    if (typeof target === 'object') {
        let clone = Array.isArray(target) ? [] : {};
        if (hash_table.get(target)) return hash_table.get(target);
        hash_table.set(target,clone);
        for (const key in target) {
            if (typeof target[key] == 'object') {
                clone[key] = deepCopy(target[key])
            } else {
                clone[key] = target[key]
            }
        }
        return clone
    } else {
        return target
    }
}

let id = 0
// 主要用于 Vue 的 diff 算法，为每个元素创建一个独一无二的 ID
export default function generateID() {
    return id++
}

export function swap(arr,i,j) {
    const t = arr[i]
    Vue.set(arr,i,arr[j])
    Vue.set(arr,j,temp)
}

export function $(selector) {
    return document.querySelector(selector)
}
