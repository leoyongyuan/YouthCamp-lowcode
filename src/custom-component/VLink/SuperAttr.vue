<template>
    <el-form>
        <el-form-item label="内容">
            <el-input v-model="curComponent.propValue.text" type="textarea" />
        </el-form-item>
        <el-form-item label="加入链接">
            <el-input v-model="curComponent.propValue.link" type="textarea" />
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        styleKeys() {
            if (this.curComponent) {
                const curComponentStyleKeys = Object.keys(this.curComponent.style)
                return this.styleData.filter(item => curComponentStyleKeys.includes(item.key))
            }
            return []
        },
        curComponent() {
            return this.$store.state.curComponent
        },
    },
    methods: {
        isIncludesColor(str) {
            return str.toLowerCase().includes('color')
        },
    },
}
</script>