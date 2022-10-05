<template>
    <div class="text-center">
        <v-pagination
            v-model="propValue.page"
            :length="15"
            :total-visible="7"
        ></v-pagination>
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