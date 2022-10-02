<template>
    <v-textarea
    filled
    auto-grow
    :label="propValue.label"
    :style="element.style"
    :value="propValue.value"
    :height="element.style.height"
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
.v-textarea{
    height: 100% !important
 }
</style>
