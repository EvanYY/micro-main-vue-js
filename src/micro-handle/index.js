// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import { microApp } from './app'
// import { registerMicroApps } from 'qiankun'
// const apps = microApp
// console.log('apps', apps)
// /**
//  * 注册子应用
//  * 第一个参数 - 子应用的注册信息
//  * 第二个参数 - 全局生命周期钩子
//  */

// registerMicroApps(
//   apps,
//   {
//     beforeLoad: app => console.log('before load', app.name),
//     beforeMount: [
//       app => console.log('before mount', app.name)
//     ]
//   }
// )
// /**
//  * 添加全局的未捕获异常处理器
//  */
// // addGlobalUncaughtErrorHandler((event) => {
// //   const { message: msg } = event
// //   // 加载失败时提示
// //   if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
// //     // eslint-disable-next-line no-alert
// //     window.alert('子应用加载失败，请检查应用是否可运行')
// //   }
// // })

// // 导出 qiankun 的启动函数
// // export default start
