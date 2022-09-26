<template>
    <div
        class="editor"
        :style="{
            ...getCanvasStyle(canvasStyleData),
        }"
    >
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCanvasStyle } from '@/utils/style'
export default {
    data() {
        return {}
    },
    computed: mapState([
        'canvasStyleData',
    ]),
    methods: {
        getCanvasStyle,
    }
}
</script>

<style>

</style>