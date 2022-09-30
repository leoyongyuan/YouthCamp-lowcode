<template>
    <div>
        <component
            :is="config.component"
            ref="component"
            class="component"
            :style="getStyle(config.style)"
            :prop-value="config.propValue"
            :element="config"
            :request="config.request"
            :linkage="config.linkage"
        />
    </div>
</template>

<script>
import { getStyle } from '@/utils/style'

export default {
    props: {
        config: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
    methods: {
        getStyle,
    },
}
</script>

<style lang="scss" scoped>
.component {
    position: absolute;
}
</style>
