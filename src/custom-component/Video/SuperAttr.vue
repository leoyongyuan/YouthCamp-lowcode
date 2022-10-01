<template>
    <div @change="getObjectURL">
        <v-file-input
        :rules="rules"
        accept="video/mp4"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="上传视频"
        ></v-file-input>
    </div>
</template>

<script>
export default {
    computed: {
        curComponent() {
            return this.$store.state.curComponent
        },
    },
    methods: {
        getObjectURL(e) {
            let url = null
            let fr = new FileReader()
            fr.readAsDataURL(e.target.files[0])
            fr.onload = e => {
                url = e.target.result
                this.curComponent.propValue.url = url
            }
        },
    },
}
</script>
<style lang="scss" scoped>
</style>
