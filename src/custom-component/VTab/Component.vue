<template>
    <v-sheet elevation="6" :style="element.style">
        <v-tabs
            background-color="cyan"
            dark
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
        >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
                draggable="false"
                v-for="i in 10"
                :key="i"
                :href="'#tab-' + i"
                >
                标签 {{ i }}
            </v-tab>
        </v-tabs>
    </v-sheet>
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