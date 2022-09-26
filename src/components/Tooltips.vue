<template>
    <v-tooltip 
        :bottom="bottom"
        :right="right"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Button
        </v-btn>
        </template>
        <span> {{ tips }}</span>
    </v-tooltip>
</template>

<script>
export default {
    props: ['right','bottom','tips'],
    data() {
        return {
            bottom,
            right,
        }
    },
}
</script>