<template>
  <div class="mirco-main-room">
    <router-view  />
  </div>
</template>

<script>
// import MainMenu from '@/components/menu/index.vue'
export default {
  components: {
  },
  data () {
    return {
      menus: [
        {
          key: 'Home',
          title: '主页',
          path: '/'
        },
        {
          key: 'MicroAppCrm',
          title: 'CRM test',
          path: '/crm'
        },
        {
          key: 'MicroAppReport',
          title: 'report test',
          path: '/report'
        }
        // {
        //   key: 'VueMicroAppList',
        //   title: 'Vue 列表页',
        //   path: '/vue/list'
        // },
        // {
        //   key: 'ReactMicroApp',
        //   title: 'React 主页',
        //   path: '/react'
        // },
        // {
        //   key: 'ReactMicroAppList',
        //   title: 'React 列表页',
        //   path: '/react/list'
        // },
        // {
        //   key: 'StaticMicroApp',
        //   title: 'Static 微应用',
        //   path: '/static'
        // }
      ]
    }
  }
}
</script>
