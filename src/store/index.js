import Vue from 'vue'
import Vuex from 'vuex'
import compose from './compose'
import snapshot from './snapshot'
import contextmenu from './contextmenu'
import copy from './copy'
import layer from './layer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...compose.state,
    ...snapshot.state,
    ...contextmenu.state,
    ...copy.state,
    ...layer.state,

    editMode: 'edit', // 编辑器模式 edit preview
    canvasStyleData: { // 页面全局数据
        width: 1200,
        height: 740,
        scale: 100,
        color: '#000',
        opacity: 1,
        background: '#fff',
        fontSize: 14,
    },
    isInEdiotr: false, // 是否在编辑器中，用于判断复制、粘贴组件时是否生效，如果在编辑器外，则无视这些操作
    componentData: [], // 画布组件数据
    curComponent: null,
    curComponentIndex: null,
    isClickComponent: false,
    // 点击画布时是否点中组件，主要用于取消选中组件用。
    // 如果没点中组件，并且在画布空白处弹起鼠标，则取消当前组件的选中状态
  },
  getters: {
  },
  mutations: {
    ...compose.mutations,
    ...snapshot.mutations,
    ...contextmenu.mutations,
    ...copy.mutations,
    ...layer.mutations,

    echartSetcurComponent(state, value) {
        for (let i = 0; i < state.componentData.length;i ++ ) {
            if (state.componentData[i].id === value.id) {
                state.componentData.splice(i,1)
            }
        }
        console.log(111);
        state.componentData.push(value)
        state.curComponent = value
    },

    acesetCanvasData(state, value) {
        state.canvasStyleData = value
    },

    acesetcurComponent(state, value) {
        for (let i = 0; i < state.componentData.length;i ++ ) {
            if (state.componentData[i].id === value.id) {
                state.componentData.splice(i,1)
            }
        }
        state.componentData.push(value)
        state.curComponent = value
    },

    addComponent(state, { component, index }) {
        if (index !== undefined) {
            state.componentData.splice(index, 0, component)
        } else {
            state.componentData.push(component)
        }
    },

    setCanvasStyle(state, style) {
        state.canvasStyleData = style
    },

    setCurComponent(state, { component, index }) {
        state.curComponent = component
        state.curComponentIndex = index
    },

    setShapeStyle({ curComponent }, { top, left, width, height, rotate }) {
        if (top) curComponent.style.top = Math.round(top)
        if (left) curComponent.style.left = Math.round(left)
        if (width) curComponent.style.width = Math.round(width)
        if (height) curComponent.style.height = Math.round(height)
        if (rotate) curComponent.style.rotate = Math.round(rotate)
    },

    setShapeSingleStyle({ curComponent }, { key, value }) {
        curComponent.style[key] = value
    },

    setClickComponentStatus(state, status) {
        state.isClickComponent = status
    },

    setEditMode(state, mode) {
        state.editMode = mode
    },

    setInEditorStatus(state, status) {
        state.isInEdiotr = status
    },

    setComponentData(state, componentData = []) {
        Vue.set(state, 'componentData', componentData)
    },

    deleteComponent(state, index) {
        if (index === undefined) {
            index = state.curComponentIndex
        }

        if (index == state.curComponentIndex) {
            state.curComponentIndex = null
            state.curComponent = null
        }

        if (/\d/.test(index)) {
            state.componentData.splice(index, 1)
        }
    },
  },
  actions: {
  },
  modules: {
  }
})
