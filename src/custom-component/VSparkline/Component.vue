<template>
    <div>
        <v-sparkline
        :fill="propValue.fill"
        :gradient="propValue.selectedGradient"
        :line-width="propValue.width"
        :padding="propValue.padding"
        :smooth="propValue.radius || false"
        :value="propValue.value"
        :style="element.style"
        auto-draw
        ></v-sparkline>
    </div>
</template>
<script>
import OnEvent from '../common/OnEvent'

export default {
    extends: OnEvent,
    props: {
        propValue: {
            type: Object,
            required: true,
            default: () => {},
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
}
</script>