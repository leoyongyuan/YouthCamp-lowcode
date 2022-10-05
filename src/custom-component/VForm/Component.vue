<template>
    <v-card elevation="4" :style="element.style" :height="element.style.height">
        <v-form
            ref="form"
            v-model="propValue.valid"
            lazy-validation
            :style="element.style"
        >
            <v-text-field
                v-model="propValue.name"
                :counter="10"
                :rules="propValue.nameRules"
                label="Name"
                required
                class="gap"
            ></v-text-field>
        
            <v-text-field
                v-model="propValue.email"
                :rules="propValue.emailRules"
                label="E-mail"
                required
                class="gap"
            ></v-text-field>
        
            <v-select
                v-model="propValue.select"
                :items="propValue.items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
                class="gap"
            ></v-select>
        
            <v-checkbox
                v-model="propValue.checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
                class="gap"
            ></v-checkbox>
        
            <v-btn
                :disabled="!propValue.valid"
                color="success"
                class="mr-4 gap"
                @click="validate"
            >
                Validate
            </v-btn>
        
            <v-btn
                color="error"
                class="mr-4 gap"
                @click="reset"
            >
                Reset Form
            </v-btn>
        
            <v-btn
                color="warning"
                @click="resetValidation"
                class="gap"
            >
                Reset Validation
            </v-btn>
        </v-form>
    </v-card>
</template>
<script>
import OnEvent from '../common/OnEvent'
 export default {
    extends: OnEvent,
    props: {
        propValue: {
            type: Object,
            default: () => {},
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    },
}
  </script>

<style lang="scss" scoped>
.gap {
    margin: 5px;
}
</style>
