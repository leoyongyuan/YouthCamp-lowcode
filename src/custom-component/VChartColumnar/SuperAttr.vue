<template>
    <div class="attr-list">
        <el-form>
            <el-form-item label="图表示例">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="(item, index) in optionsum"
                        :key="index"
                        :label="item.label"
                        :value="item.label"
                        :disabled="item.disabled"
                        @click.native="selectoption(item.chart)"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-switch
                    v-model="option.title.show"
                    active-text="显示标题">
                </el-switch>
                <el-input 
                    v-model="option.title.text"
                    placeholder="请输入内容">
                </el-input>
            </el-form-item>
            <el-form-item label="工具提示">
                <el-switch
                    v-model="option.tooltip.show"
                    active-text="显示提示">
                </el-switch>
            </el-form-item>
            <el-form-item label="图例">
                <el-switch
                    v-model="option.legend.show"
                    active-text="显示图例">
                </el-switch>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { optionsum } from '@/utils/echart/columnar.js'  
export default {
    data() {
        return {
            optionsum,
            value: '柱状图',
            valuetitle: true,
        }
    },
    computed: {
        curComponent() {
            return this.$store.state.curComponent
        },
        option() {
            return this.$store.state.curComponent.propValue.option
        },
    },
    methods: {
        selectoption(chart) {
            this.curComponent.propValue.chart = chart
        },
    },
}
</script>
<style lang="scss" scoped>
.attr-list {
    overflow: auto;
    padding: 20px;
    padding-top: 0;
    height: 100%;
}
</style>
