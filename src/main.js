import Vue from 'vue'
import App from './App.vue'

// 私有模块
import '@/plugins/Element'
import '@/plugins/Element/element.scss'
import ElementLocale from 'element-ui/lib/locale'
import i18n from '@/locale'
// 注册全局组件
import '@/plugins/custom'

// 公共模块
import router from './router'
import store from './store'
import cookie from 'js-cookie'
import Store from 'storejs'
// 全局样式处理
import '@/assets/styles/custom-font/custom-icons.less'
import '@/assets/styles/index.scss'


Vue.config.productionTip = false
ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.prototype.$cookie = cookie
Vue.prototype.$Store = Store

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#main-app-mount')
