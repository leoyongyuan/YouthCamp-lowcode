import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'
import '@/custom-component' // 注册自定义组件
// To add vuetify css file
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,  
  Vuetify,
  render: h => h(App)
}).$mount('#app')
