import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    children: [
      {
        name: 'micro-vue-app1',
        path: 'vue/*'
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
