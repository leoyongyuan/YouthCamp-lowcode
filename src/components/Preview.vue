<template>
    <div v-if="show" ref="container" class="bg">
        <el-button class="close" @click="close">关闭</el-button>
        <el-button 
            ref="send_btn"
            class="send" 
            type="primary"
        >
            发布
        </el-button>
        <a ref="send_link" style="display: none;"></a>
        <div class="canvas-container">
            <div
                class="canvas"
                :style="{
                    ...getCanvasStyle(canvasStyleData),
                    width: changeStyleWithScale(canvasStyleData.width) + 'px',
                    height: changeStyleWithScale(canvasStyleData.height) + 'px',
                }"
            >
                <ComponentWrapper 
                    v-for="(item, index) in componentData"
                    :key="index"
                    :config="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { getStyle, getCanvasStyle, changeStyleWithScale } from '@/utils/style'
import { mapState } from 'vuex'
import ComponentWrapper from './ComponentWrapper.vue'

export default {
    model: {
        prop: "show",
        event: "change",
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        isScreenshot: {
            type: Boolean,
            default: false,
        },
    },
    computed: mapState([
        "componentData",
        "canvasStyleData",
        "curComponent",
    ]),
    methods: {
        getStyle,
        getCanvasStyle,
        changeStyleWithScale,
        close() {
            this.$emit("change", false);
        },
    },
    components: { ComponentWrapper }
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background: rgb(0, 0, 0, .5);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    padding: 20px;

    .canvas-container {
        width: calc(100% - 40px);
        height: calc(100% - 120px);
        overflow: auto;

        .canvas {
            background: #fff;
            position: relative;
            margin: auto;
        }
    }

    .close {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .send,
    .screenshot {
        position: absolute;
        right: 100px;
        top: 20px;
    }
}
</style>