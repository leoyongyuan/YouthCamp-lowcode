<template>
    <div
        id="editor"
        class="editor"
        :class="{ edit: isEdit }"
        :style="{
            ...getCanvasStyle(canvasStyleData),
            width: changeStyleWithScale(canvasStyleData.width) + 'px',
            height: changeStyleWithScale(canvasStyleData.height) + 'px',
        }"
        @contextmenu="handleContextMenu"
    >
        <Shape
            v-for="(item, index) in componentData"
            :key="item.id"
            :default-style="item.style"
            :style="getShapeStyle(item.style)"
            :active="item.id === (curComponent || {}).id"
            :element="item"
            :index="index"
        >
            <component
                :is="item.component"
                class="component"
                :style="getComponentStyle(item.style)"
                :prop-value="item.propValue"
                :element="item"
                :request="item.request"
                @input="handleInput"
            />
        </Shape>
        <ContextMenu />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCanvasStyle, getStyle, getShapeStyle } from '@/utils/style'
import Shape from './Shape.vue'
import ContextMenu from './ContextMenu.vue';
import { changeStyleWithScale } from '@/utils/style'

export default {
    components: { Shape, ContextMenu },
    props: {
        isEdit: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            editorX: 0,
            editorY: 0,
            start: { // 选中区域的起点
                x: 0,
                y: 0,
            },
            width: 0,
            height: 0,
            isShowArea: false,
            svgFilterAttrs: ['width', 'height', 'top', 'left'],
        };
    },
    computed: mapState([
        "componentData",
        "curComponent",
        "canvasStyleData",
        "editor",
    ]),
    mounted() {
        this.$store.commit("getEditor");
    },
    methods: {
        getCanvasStyle,
        getShapeStyle,
        changeStyleWithScale,

        getComponentStyle(style) {
            return getStyle(style, this.svgFilterAttrs)
        },

        handleInput(element, value) {
            // 根据文本组件高度调整 shape 高度
            this.$store.commit('setShapeStyle', { height: this.getTextareaHeight(element, value) })
        },

        getTextareaHeight(element, text) {
            let { lineHeight, fontSize, height } = element.style
            if (lineHeight === '') {
                lineHeight = 1.5
            }

            const newHeight = (text.split('<br>').length - 1) * lineHeight * (fontSize || this.canvasStyleData.fontSize)
            return height > newHeight ? height : newHeight
        },

        handleContextMenu(e) {
            e.stopPropagation()
            e.preventDefault()

            // 计算菜单相对于编辑器的位移
            let target = e.target
            let top = e.offsetY
            let left = e.offsetX

            while (!target.className.includes('editor')) {
                left += target.offsetLeft
                top += target.offsetTop
                target = target.parentNode
            }

            this.$store.commit('showContextMenu', { top, left })
        },
    },
}
</script>

<style lang="scss" scoped>
.editor {
    position: relative;
    background: #fff;
    margin: auto;
}

</style>