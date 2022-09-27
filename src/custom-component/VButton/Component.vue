<template>
    <button>按钮</button>
</template>

<script>

export default {
    props: {
        propValue: {
            type: String,
            default: '',
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
