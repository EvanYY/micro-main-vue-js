import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'

import router from './router'
import store from './store'
import './assets/styles/locale.antd.css'
import './micro-handler'

Vue.use(Antd)
Vue.config.productionTip = false
// startQiankun(staticStart)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#main-app-mount')
