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
        </el-form>
    </div>
</template>

<script>
import { optionsum } from '@/utils/echart/columnar.js'  
export default {
    data() {
        return {
            optionsum,
            value: '',
        }
    },
    computed: {
        curComponent() {
            return this.$store.state.curComponent
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
