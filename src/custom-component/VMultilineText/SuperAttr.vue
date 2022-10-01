<template>
    <el-form>
        <el-form-item label="修改内容">
            <el-input v-model="curComponent.propValue.value" type="textarea" :rows="3" />
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    computed: {
        curComponent() {
            return this.$store.state.curComponent
        },
    },
}
</script>
<style lang="scss" scoped>
</style>
