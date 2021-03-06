import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  axios,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
