import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'
import '@/custom-component' // 注册自定义组件
// To add vuetify css file
import 'vuetify/dist/vuetify.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import * as echarts from 'echarts'
import 'echarts-gl';

import $ from 'jquery'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })
new Vue({
  router,
  store,
  vuetify,  
  Vuetify,
  render: h => h(App)
}).$mount('#app')
