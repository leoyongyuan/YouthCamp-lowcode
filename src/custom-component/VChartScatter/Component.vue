<template>
    <div>
        <div ref="EChart" style="width: 500px; height:300px;">
        </div>
    </div>
</template>

<script>
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
        'propValue.data': function () {
            this.changechart()
        },
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        this.echart = this.$echarts.init(this.$refs.EChart)
        this.render()
    },
    methods: {
        render() {
            // 清除之前的数据参数
            this.echart.clear()
            let EChart = this.echart
            let option = this.propValue
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
