<template>
    <div>
        <v-switch
            v-model="propValue.fill"
            label="Filled"
        ></v-switch>
        <v-slider
            v-model="propValue.radius"
            label="Radius"
            min="0"
            max="25"
            thumb-label
        ></v-slider>
        <v-slider
            v-model="propValue.padding"
            label="Padding"
            min="0"
            max="25"
            thumb-label
        ></v-slider>
        <v-item-group
            v-model="propValue.selectedGradient"
            mandatory
        >
            <v-row>
                <v-item
                    v-for="(gradient, i) in propValue.gradients"
                    :key="i"
                    v-slot="{ active, toggle }"
                    :value="gradient"
                >
                <v-card
                    :style="{
                        background: gradient.length > 1
                        ? `linear-gradient(0deg, ${gradient})`
                        : gradient[0],
                        border: '2px solid',
                        borderColor: active ? '#222' : 'white',
                        margin: '20px 5px 15px 12px',
                    }"
                    width="30"
                    height="30"
                    class="mr-2"
                    @click.native="toggle"
                ></v-card>
                </v-item>
            </v-row>
        </v-item-group>
    </div>
</template>

<script>
export default {
    data() {
        return{
        }
    },
    computed: {
        curComponent() {
            return this.$store.state.curComponent
        },

        propValue() {
            return this.$store.state.curComponent.propValue
        },
    },
}
</script>