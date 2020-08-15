import Vue from 'vue'
import VueRouter from 'vue-router'
import { beforeEach } from './beforeEach'
import { afterEach } from './afterEach'
import { beforeResolve } from './beforeResolve'
import { onError } from './onError'
import { onReady } from './onReady'
import { baseRoutes } from './base-routes'
Vue.use(VueRouter)

const routes = [].concat(baseRoutes)
/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach(beforeEach)
router.beforeResolve(beforeResolve)
router.afterEach(afterEach)
router.onReady(onReady)
router.onError(onError)
export default router
