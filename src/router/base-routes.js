import Home from '@/views/Home.vue'
// import Error404 from '@/pages/error/404'

export const baseRoutes = [
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: '/',
    name: 'Home',
    component: Home
  }
  // {
  //   path: '*',
  //   name: 'Error404',
  //   component: Error404
  // }
]
