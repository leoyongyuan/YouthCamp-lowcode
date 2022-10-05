<template>
    <CommonAttr></CommonAttr>
</template>

<script>
import CommonAttr from '../common/CommonAttr.vue';

export default {
    components: { CommonAttr },
    computed: {
        curComponent() {
            return this.$store.state.curComponent
        },
    },
}
</script>
