<template>
    <div>
        <div ref="EChart">
        </div>
    </div>
</template>

<script>
import { optionsum } from '@/utils/echart/line.js'  
import OnEvent from '../common/OnEvent'

export default {
    extends: OnEvent,
    props: {
        propValue: {
            type: Object,
            require: true,
            default: () => {},
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            optionsum,
        }
    },
    watch: {
        'propValue.chart': function () {
            this.changechart()
        },
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        this.echart = this.$echarts.init(this.$refs.EChart, null, {
            width: this.element.style.width,
            height: this.element.style.height,
        })
        this.render()
    },
    methods: {
        render() {
            // 清除之前的数据参数
            this.echart.clear()
            let EChart = this.echart
            this.propValue.option = this.optionsum[this.propValue.chart]
            let option = this.propValue.option
            // 设置参数
            let config = {
                ...option,
            }
            // 配置参数
            EChart.setOption(config)
        },

        changechart() {
            this.render()
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
