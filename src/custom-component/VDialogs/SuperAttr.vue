<template>
    <el-form>
        <el-form-item label="命名">
            <el-input v-model="curComponent.propValue.lable" type="textarea" :rows="1" />
        </el-form-item>
        <el-form-item label="标题">
            <el-input v-model="curComponent.propValue.title" type="textarea" :rows="1" />
        </el-form-item>
        <el-form-item label="内容">
            <el-input v-model="curComponent.propValue.text" type="textarea" :rows="8" />
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
