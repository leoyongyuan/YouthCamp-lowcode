<template>
    <div>
        <div ref="EChart">
        </div>
    </div>
</template>

<script>
import { optionsum } from '@/utils/echart/pie.js'  
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
    computed: {
        curComponent() {
            return this.$store.state.curComponent
        },
    },
    watch: {
        'propValue.chart': function () {
            this.changechart()
        },
        'curComponent.propValue.option': function () {
            this.changeoption()
        },
        'curComponent.style.width': function() {
            this.render()
        },
        'curComponent.style.height': function() {
            this.render()
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
            let option = this.propValue.option
            // 设置参数
            let config = {
                ...option,
            }
            this.echart.resize({
                width: this.element.style.width, 
                height: this.element.style.height
            })
            // 配置参数
            EChart.setOption(config)
        },

        changechart() {
            this.propValue.option = this.optionsum[this.propValue.chart]
            this.render()
        },

        changeoption() {
            if (this.curComponent.id !== this.element.id) return;
            this.propValue.option = this.curComponent.propValue.option
            this.render()
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
