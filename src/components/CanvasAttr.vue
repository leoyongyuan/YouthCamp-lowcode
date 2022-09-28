<template>
    <div class="attr-container">
        <el-form style="padding: 20px;">
            <el-form-item v-for="(key, index) in Object.keys(options)" :key="index" :label="options[key]">
                <el-color-picker v-if="isIncludesColor(key)" v-model="canvasStyleData[key]" show-alpha></el-color-picker>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            options: {
                color: '颜色',
                backgroundColor: '背景色',
            },
        }
    },
    computed: mapState([
        'canvasStyleData',
    ]),
    methods: {
        isIncludesColor(str) {
            return str.toLowerCase().includes('color')
        },
    },
}
</script>

<style lang="scss">
.attr-container {
    .title {
        text-align: center;
        margin-bottom: 10px;
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid #e4e7ed;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
    }
}
</style>
