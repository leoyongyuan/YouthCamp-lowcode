<template>
    <v-carousel v-model="model"
        :style="element.style"
        :height="element.style.height"
        :cycle="propValue.cycle"
    >
        <v-carousel-item
            v-for="(item, i) in propValue.url"
            :key="i"
        >
        <img draggable="false" :height="element.style.height" :width="element.style.width" :src="item"/>
      </v-carousel-item>
    </v-carousel>
</template>
<script>
import OnEvent from '../common/OnEvent'
export default {
    extends: OnEvent,
    props: {
        propValue: {
            type: Object,
            require: true,
            default: () => {},
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
    data () {
        return {
            model: 0,
        }
    },
}
</script>