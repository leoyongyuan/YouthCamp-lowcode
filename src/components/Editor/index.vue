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
                :prop-value="item.propValue"
                :element="item"
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
.editor {
    position: relative;
    background: #fff;
    margin: auto;

    .lock {
        opacity: .5;

        &:hover {
            cursor: not-allowed;
        }
    }
}

.edit {
    .component {
        outline: none;
        width: 100%;
        height: 100%;
    }
}
</style>