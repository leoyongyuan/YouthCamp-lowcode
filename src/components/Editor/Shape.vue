<template>
    <div
        class="shape"
        :class="{ active }"
        @click="selectCurComponent"
        @mousedown="handleMouseDownOnShape"
    >
        <div
            v-for="item in (isActive() ? pointList : [])"
            :key="item"
            class="shape-point"
            :style="getPointStyle(item)"
        >
        </div>
        <slot></slot>
    </div>
</template>
<script>
import eventBus from '@/utils/eventBus'
import { mapState } from 'vuex'

export default {
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        element: {
            require: true,
            type: Object,
            default: () => {},
        },
        defaultStyle: {
            require: true,
            type: Object,
            default: () => {},
        },
        index: {
            require: true,
            type: [Number, String],
            default: 0,
        },
    },
    data() {
        return {
            pointList: ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'], // 八个方向
        }
    },
    computed: mapState([
        'curComponent',
        'editor',
    ]),
    methods: {
        handleMouseDownOnShape(e) {
            this.$store.commit('setInEditorStatus', true)
            this.$store.commit('setClickComponentStatus', true)
            e.stopPropagation()
            this.$store.commit('setCurComponent', { component: this.element, index: this.index })

            const pos = { ...this.defaultStyle }
            const startY = e.clientY
            const startX = e.clientX
            // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型

            const startTop = Number(pos.top)
            const startLeft = Number(pos.left)
            
            // 如果元素没有移动，则不保存快照
            const move = (moveEvent) => {
                const curX = moveEvent.clientX
                const curY = moveEvent.clientY
                pos.top = curY - startY + startTop
                pos.left = curX - startX + startLeft

                // 修改当前组件样式
                this.$store.commit('setShapeStyle', pos)

                this.$nextTick(() => {
                    // 让MarkLine 接收
                    eventBus.$emit('move', curY - startY > 0, curX - startX > 0)
                })
            }

            const up = () => {
                eventBus.$emit('unmove')
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
            }

            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', up)
        },

        selectCurComponent(e) {
            // 阻止向父组件冒泡
            e.stopPropagation()
            e.preventDefault()
        },

        isActive() {
            return this.active
        },

        getPointStyle(point) {
            const { width, height } = this.defaultStyle
            const hasT = /t/.test(point)
            const hasB = /b/.test(point)
            const hasL = /l/.test(point)
            const hasR = /r/.test(point)
            
            let leftnum = 0
            let topnum = 0
            if (point.length === 2) {
                leftnum = hasL ? 0 : width
                topnum = hasT ? 0 : height
            } else {
                if (hasT || hasB) {
                    leftnum = width / 2
                    topnum = hasT ? 0 : height
                }

                if (hasL || hasR) {
                    leftnum = hasL ? 0 : width
                    topnum = Math.floor(height / 2)
                }
            }
            
            const style = {
                marginLeft: '-4px',
                marginTop: '-4px',
                left: `${leftnum}px`,
                top: `${topnum}px`,
            }

            return style
        },
    }
}
</script>
<style lang="scss" scoped>
.shape {
    position: absolute;

    &:hover {
        cursor: move;
    }
}

.active {
    outline: 1px solid #70c0ff;
    user-select: none;
}

.shape-point {
    position: absolute;
    background: #fff;
    border: 1px solid #59c7f9;
    width: 8px;
    height: 8px;
    border-radius: 40%;
    z-index: 1;
}

.icon-xiangyouxuanzhuan {
    position: absolute;
    top: -34px;
    left: 50%;
    transform: translateX(-50%);
    cursor: grab;
    color: #59c7f9;
    font-size: 20px;
    font-weight: 600;

    &:active {
        cursor: grabbing;
    }
}

.icon-suo {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
