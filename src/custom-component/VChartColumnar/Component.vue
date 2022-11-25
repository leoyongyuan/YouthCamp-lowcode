<template>
    <div>
        <div ref="EChart"></div>
    </div>
</template>

<script>
import { optionsum } from '@/utils/echart/columnar.js'  
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
        }
    },
    watch: {
        'propValue.chart': function() {
            this.changechart()
        },
        curComponent: {
            deep: true,
            handler() {
                this.render();
            }
        }
    },
    mounted() {
        // 初始化echarts实例
        this.echart = this.$echarts.init(this.$refs.EChart, null, {
            width: this.element.style.width,
            height: this.element.style.height,
        })
        this.render()
    },
    methods: {
        render() {
            let EChart = this.echart
            let option = this.propValue.option
            // 设置参数
            let config = {
                ...option,
            }
            // 更新大小
            this.echart.resize({
                width: this.element.style.width, 
                height: this.element.style.height
            })
            // 配置参数
            EChart.setOption(config)
        },

        changechart() {
            // 清除之前的数据参数
            this.echart.clear()
            this.propValue.option = this.optionsum[this.propValue.chart]
            this.render()
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
