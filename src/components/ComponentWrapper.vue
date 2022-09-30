<template>
    <div @click="onClick" @mouseenter="onMouseEnter" @dblclick="ondblClick">
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
import eventBus from '@/utils/eventBus'

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

        onClick() {
            const events = this.config.events
            Object.keys(events).forEach(event => {
                this[event](events[event])
            })

            eventBus.$emit('v-click', this.config.id)
        },

        onMouseEnter() {
            eventBus.$emit('v-hover', this.config.id)
        },

        ondblClick() {
            eventBus.$emit('v-dblclick', this.config.id)
        },
    },
}
</script>

<style lang="scss" scoped>
.component {
    position: absolute;
}
</style>
