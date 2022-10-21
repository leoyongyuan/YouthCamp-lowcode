<template>
    <div class="mark-line">

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            lines: ['xt', 'xc', 'xb', 'yl', 'yc', 'yr'],
            diff: 3, // 相距 diff 像素将自动吸附
            lineStatus: {
                xt: false,
                xc: false,
                xb: false,
                yl: false,
                yc: false,
                yr: false,
            },
        }
    },
    computed: mapState([
        'curComponent',
        'componentData',
    ]),
}
</script>

<style lang="scss" scoped>
</style>