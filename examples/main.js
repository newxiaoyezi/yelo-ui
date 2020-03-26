import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import yeloUI from './../packages'

Vue.use(yeloUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
