import Vue from 'vue'
import App from './App.vue'
import startQiankun from './micro'
import router from './router'
import store from './store'
console.log(startQiankun)
Vue.config.productionTip = false
startQiankun()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#main-app-mount')
