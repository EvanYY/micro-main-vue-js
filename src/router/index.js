import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    children: [
      {
        path: 'vue',
        name: 'Vue'
      }
    ],
    component: () => import('@/views/Main.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})
router.beforeEach((to, from, next) => {
  console.log('global each')
  next()
})
router.onError((err) => {
  throw Error(err)
})
export default router
