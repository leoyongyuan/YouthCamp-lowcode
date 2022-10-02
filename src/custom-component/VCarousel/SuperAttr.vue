<template>
    <div>
        <div v-for="(item,i) in curComponent.propValue.url" :key="i">
            <div @change="getObjectURL($event,i)">
                <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="上传图片"
                ></v-file-input>
            </div>
        </div>
        <v-btn
        style="margin: 10px;margin-left: 30px;"
        depressed
        @click="addimage"
        >添加选项</v-btn>
        <v-btn
        style="margin: 10px;"
        depressed
        @click="delimage"
        >删除选项</v-btn>
        <v-switch
            style="margin: 10px;"
            @click="changecycle"
            label="自动循环"
            inset
        ></v-switch>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cycle: this.$store.state.curComponent.propValue.cycle
        }
    },
    computed: {
        curComponent() {
            return this.$store.state.curComponent
        },
    },
    methods: {
        getObjectURL(e,idx) {
            let url = null
            if (window.createObjcectURL != undefined) {
                url = window.createOjcectURL(e.target.files[0])
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(e.target.files[0])
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(e.target.files[0])
            }
            this.curComponent.propValue.url[idx] = url
        },

        addimage() {
            if (this.curComponent.propValue.url.length >= 8) return;
            this.curComponent.propValue.url.push('')
        },

        changecycle() {
            this.$store.state.curComponent.propValue.cycle = !this.$store.state.curComponent.propValue.cycle
        },

        delimage() {
            if (this.curComponent.propValue.url.length <= 5) return;
            this.curComponent.propValue.url.pop()
        },
    },
}
</script>
<style lang="scss" scoped>
</style>
