const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { defineConfig } = require('@vue/cli-service');
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
    'vue-echarts',
    'resize-detector'
  ]
})
module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config
      .plugin('bundle-analyzer')
      .use(BundleAnalyzerPlugin)
      .use(CompressionWebpackPlugin)
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'element-ui': 'ELEMENT',
      'vuetify': 'Vuetify',
    }
  },
}