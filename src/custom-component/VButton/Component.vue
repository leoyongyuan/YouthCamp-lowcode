<template>
    <v-btn
        elevation="2"
        :style="element.style"
    >{{ propValue }}</v-btn>
</template>

<script>
import OnEvent from '../common/OnEvent'
export default {
    extends: OnEvent,
    props: {
        propValue: {
            type: String,
            default: '',
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.v-btn {
    width: 100%;
    height: 100%;
}
</style>
