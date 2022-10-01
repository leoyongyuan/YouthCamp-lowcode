<template>
    <v-textarea
        filled
        :label="propValue.label"
        :style="element.style"
        :value="propValue.value"
        color="teal"
    ></v-textarea>
</template>

<script>
import OnEvent from '../common/OnEvent'
export default {
    extends: OnEvent,
    props: {
        propValue: {
            type: Object,
            default: () => {},
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
