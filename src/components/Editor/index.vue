<template>
    <div
        id="editor"
        class="editor"
        :style="{
            ...getCanvasStyle(canvasStyleData),
        }"
    >
        <div
            v-for="(item, index) in componentData"
            :key="item.id"
            :default-style="item.style"
            :element="item"
            :index="index"
            >
            <component
                :is="item.component"
                :id="'component' + item.id"
                class="component"
                :style="getComponentStyle(item.style)"
                :prop-value="item.propValue"
                :element="item"
                :request="item.request"
                @input="handleInput"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCanvasStyle } from '@/utils/style'

export default {
    data() {
        return {
        }
    },
    computed: mapState([
        'componentData',
        'curComponent',
        'canvasStyleData',
        'editor',
    ]),

    mounted()    {
        this.$store.commit('getEditor')
    },

    methods: {
        getCanvasStyle,
    }
}
</script>

<style>

</style>