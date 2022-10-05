<template>
    <div class="text-center">
      <v-dialog
        v-model="propValue.dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            class="btn"
          >
            {{ propValue.lable }}
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            {{ propValue.title }}
          </v-card-title>
  
          <v-card-text>
            {{ propValue.text }}
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="propValue.dialog = false"
            >
              cancle
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
<style lang="scss" scoped>
.btn {
    width: 100%;
    height: 100%;
}
</style>