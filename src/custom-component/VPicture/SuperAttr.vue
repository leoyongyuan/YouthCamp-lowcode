<template>
    <div @change="getObjectURL">
        <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="上传图片"
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
            if (window.createObjcectURL != undefined) {
                url = window.createOjcectURL(e.target.files[0])
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(e.target.files[0])
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(e.target.files[0])
            }
            this.curComponent.propValue.url = url
        },
    },
}
</script>
<style lang="scss" scoped>
</style>
