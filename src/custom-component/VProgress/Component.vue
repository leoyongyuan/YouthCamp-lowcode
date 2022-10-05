<template>
    <div>
        <v-progress-linear
            v-model="propValue.knowledge"
            height="25"
        >
        <strong>{{ Math.ceil(propValue.knowledge) }}%</strong>
        </v-progress-linear>
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