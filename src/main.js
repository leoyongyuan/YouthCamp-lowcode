import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify'
import '@/custom-component' // 注册自定义组件
// To add vuetify css file
import 'vuetify/dist/vuetify.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })
new Vue({
  store,
  vuetify,  
  Vuetify,
  render: h => h(App)
}).$mount('#app')
