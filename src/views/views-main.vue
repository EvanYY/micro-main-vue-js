<template>
   <div>
     main
   </div>
</template>

<script>
// import MainMenu from '@/components/menu/index.vue'
import { startApp } from '@/micro-handler'
export default {
  components: {
    // MainMenu
  },
  data () {
    return {
      menus: [
        {
          key: 'Home',
          title: '主页',
          path: '/base'
        },
        {
          key: 'MicroAppCrm',
          title: 'CRM test',
          path: '/base/crm'
        },
        {
          key: 'MicroAppReport',
          title: 'report test',
          path: '/base/report'
        },
        {
          key: 'MicroAppLogin',
          title: 'login test',
          path: '/login'
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
  },
  mounted () {
    startApp()
  }
}
</script>
<style lang="scss" scoped>
// #cns-main-app {
//   height: 100%;
//   position: relative;
//   .cns-menu-wrapper {
//     position: fixed;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     z-index: 40;
//     width: 172px;
//     overflow-x: hidden;
//     overflow-y: auto;
//   }
//   .cns-nav-wrapper {
//     position: fixed;
//     width: 100%;
//     min-width: 1060px;
//     padding-left: 172px;
//     left: 0;
//     top: 0;
//     z-index: 30;
//   }
// }

// .cns-frame-wrapper {
//   padding-left: 172px;
//   flex-grow: 1;
//   height: 100%;
//   width: 100%;
//   position: relative;
// }

// #cns-frame {
//   width: 100%;
//   height: 100%;
//   > :first-child {
//     height: 100%;
//   }
// }
</style>
