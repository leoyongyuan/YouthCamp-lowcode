<template>
    <v-btn
      depressed
      color="primary"
    >
      Primary
    </v-btn>
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
