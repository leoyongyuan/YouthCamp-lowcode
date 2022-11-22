const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
    'vue-echarts',
    'resize-detector'
  ]
})
module.exports = {
    // ...
    publicPath: './'
    // ...
}