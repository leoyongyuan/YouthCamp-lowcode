<template>
    <v-text-field
    v-model="propValue"
    solo
    :style="element.style"
    ></v-text-field>
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
