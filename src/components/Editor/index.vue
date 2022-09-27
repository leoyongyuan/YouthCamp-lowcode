<template>
    <div
        id="editor"
        class="editor"
        :class="{ edit: isEdit }"
        :style="{
            ...getCanvasStyle(canvasStyleData),
        }"
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
                :id="'component' + item.id"
                class="component"
                :prop-value="item.propValue"
                :element="item"
            />
        </Shape>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCanvasStyle, getStyle, getShapeStyle } from '@/utils/style'
import Shape from './Shape.vue'

export default {
    components: { Shape },
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
        getComponentStyle(style) {
            return getStyle(style, this.svgFilterAttrs)
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