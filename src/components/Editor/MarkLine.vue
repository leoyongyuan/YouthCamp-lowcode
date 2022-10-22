<template>
    <div class="mark-line">
        <div
            v-for="line in lines"
            v-show="lineStatus[line] || false"
            :key="line"
            :ref="line"
            class="line"
            :class="line.includes('x')? 'xline' : 'yline'"
        ></div>
    </div>
</template>

<script>
import eventBus from '@/utils/eventBus'
import { mapState } from 'vuex';
export default {
    data() {
        return {
            lines: ['xt', 'xc', 'xb', 'yl', 'yc', 'yr'],
            diff: 3, // 相距 diff 像素将自动吸附
            lineStatus: {
                xt: false,
                xc: false,
                xb: false,
                yl: false,
                yc: false,
                yr: false,
            },
        }
    },
    computed: mapState([
        'curComponent',
        'componentData',
    ]),
    mounted() {
        eventBus.$on('move', (isDownward, isRightward) => {
            this.showLine(isDownward, isRightward)
        })

        eventBus.$on('unmove', () => {
            this.hideLine()
        })
    },
    methods: {
        hideLine() {
            Object.keys(this.lineStatus).forEach(x => {
                this.lineStatus[x] = false
            })
        },

        showLine(isDownward, isRightward) {
            const lines = this.$refs
            const components = this.componentData
            const curComponentStyle = this.getComponentStyle(this.curComponent.style)
            const curComponentHalfwidth = curComponentStyle.width / 2
            const curComponentHalfHeight = curComponentStyle.height / 2
        
            this.hideLine()
            components.forEach(component => {
                if (component == this.curComponent) return
                const componentStyle = this.getComponentStyle(component.style)
                const { top, left, bottom, right } = componentStyle
                const componentHalfwidth = componentStyle.width / 2
                const componentHalfHeight = componentStyle.height / 2

                const conditions = {
                    top: [
                        {
                            isNearly: this.isNearly(curComponentStyle.top, top),
                            lineNode: lines.xt[0], // xt
                            line: 'xt',
                            dragShift: top,
                            lineShift: top,
                        },
                        {
                            isNearly: this.isNearly(curComponentStyle.bottom, top),
                            lineNode: lines.xt[0], // xt
                            line: 'xt',
                            dragShift: top - curComponentStyle.height,
                            lineShift: top,
                        },
                        {
                            // 组件与拖拽节点的中间是否对齐
                            isNearly: this.isNearly(curComponentStyle.top + curComponentHalfHeight, top + componentHalfHeight),
                            lineNode: lines.xc[0], // xc
                            line: 'xc',
                            dragShift: top + componentHalfHeight - curComponentHalfHeight,
                            lineShift: top + componentHalfHeight,
                        },
                        {
                            isNearly: this.isNearly(curComponentStyle.top, bottom),
                            lineNode: lines.xb[0], // xb
                            line: 'xb',
                            dragShift: bottom,
                            lineShift: bottom,
                        },
                        {
                            isNearly: this.isNearly(curComponentStyle.bottom, bottom),
                            lineNode: lines.xb[0], // xb
                            line: 'xb',
                            dragShift: bottom - curComponentStyle.height,
                            lineShift: bottom,
                        },
                    ],
                    left: [
                        {
                            isNearly: this.isNearly(curComponentStyle.left, left),
                            lineNode: lines.yl[0], // yl
                            line: 'yl',
                            dragShift: left,
                            lineShift: left,
                        },
                        {
                            isNearly: this.isNearly(curComponentStyle.right, left),
                            lineNode: lines.yl[0], // yl
                            line: 'yl',
                            dragShift: left - curComponentStyle.width,
                            lineShift: left,
                        },
                        {
                            // 组件与拖拽节点的中间是否对齐
                            isNearly: this.isNearly(curComponentStyle.left + curComponentHalfwidth, left + componentHalfwidth),
                            lineNode: lines.yc[0], // yc
                            line: 'yc',
                            dragShift: left + componentHalfwidth - curComponentHalfwidth,
                            lineShift: left + componentHalfwidth,
                        },
                        {
                            isNearly: this.isNearly(curComponentStyle.left, right),
                            lineNode: lines.yr[0], // yr
                            line: 'yr',
                            dragShift: right,
                            lineShift: right,
                        },
                        {
                            isNearly: this.isNearly(curComponentStyle.right, right),
                            lineNode: lines.yr[0], // yr
                            line: 'yr',
                            dragShift: right - curComponentStyle.width,
                            lineShift: right,
                        },
                    ],
                }

                const needToShow = []
                Object.keys(conditions).forEach(x => {
                    conditions[x].forEach(condition => {
                        if (!condition.isNearly) return
                        this.$store.commit('setShapeSingleStyle',{x, value: condition.dragShift})
                        condition.lineNode.style[x] = `${condition.lineShift}px`
                        needToShow.push(condition.line)
                    })
                })

                if (needToShow.length) {
                    this.chooseLine(needToShow, isDownward, isRightward)
                }
            })
        },

        getComponentStyle(style) {
            style = {...style}
            style.bottom = style.top + style.height
            style.right = style.left + style.width
            
            return style
        },

        isNearly(dragValue, targetValue) {
            return Math.abs(dragValue - targetValue) <= this.diff
        },

        chooseLine(needToShow, isDownward, isRightward) {
            // 如果鼠标向右移动 则按从右到左的顺序显示竖线 否则按相反顺序显示
            // 如果鼠标向下移动 则按从下到上的顺序显示横线 否则按相反顺序显示
            if (isRightward) {
                if (needToShow.includes('yr')) {
                    this.lineStatus.yr = true
                } else if (needToShow.includes('yc')) {
                    this.lineStatus.yc = true
                } else if (needToShow.includes('yl')) {
                    this.lineStatus.yl = true
                }
            } else {
                // eslint-disable-next-line no-lonely-if
                if (needToShow.includes('yl')) {
                    this.lineStatus.yl = true
                } else if (needToShow.includes('yc')) {
                    this.lineStatus.yc = true
                } else if (needToShow.includes('yr')) {
                    this.lineStatus.yr = true
                }
            }

            if (isDownward) {
                if (needToShow.includes('xb')) {
                    this.lineStatus.xb = true
                } else if (needToShow.includes('xc')) {
                    this.lineStatus.xc = true
                } else if (needToShow.includes('xt')) {
                    this.lineStatus.xt = true
                }
            } else {
                // eslint-disable-next-line no-lonely-if
                if (needToShow.includes('xt')) {
                    this.lineStatus.xt = true
                } else if (needToShow.includes('xc')) {
                    this.lineStatus.xc = true
                } else if (needToShow.includes('xb')) {
                    this.lineStatus.xb = true
                }
            }
        },
    },  
}
</script>

<style lang="scss" scoped>
.mark-line {
    height: 100%;
}

.line {
    background: #59c7f9;
    position: absolute;
    z-index: 1000;
}

.xline {
    width: 100%;
    height: 1px;
}

.yline {
    width: 1px;
    height: 100%;
}
</style>