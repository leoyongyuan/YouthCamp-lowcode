<template>
    <v-card :height="element.style.height">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="list"
        :search="search"
        :style="element.style"
      ></v-data-table>
    </v-card>
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
    data() {
        return {
            search: '',
            headers: this.propValue.headers,
            list: this.propValue.itemlist,
        }
    },
}
</script>

<style lang="scss" scoped>
.box {
    height: 10px !important
}
</style>
