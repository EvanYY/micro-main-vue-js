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

export default router
