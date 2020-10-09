/* eslint-disable no-unused-vars */
import router from '@/router'
// 全局状态观察池
export default {
  namespaced: true,
  state: {
    behaviorPools: [],
    preBehavior: ''
  },
  mutations: {
    preBehavior (state, val) {
      state.preBehavior = val
    }
  },
  actions: {
    // 在这个模块中， dispatch 和 commit 也被局部化了
    // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
    actionBehavior ({ state, commit, rootState, dispatch, getters, rootGetters }, payloadAll = {}) {
      // 如果参数为 执行函数时 params为为必填项且为JSON，time为时间戳 new Date().getTime() 在定义参数前打好时间戳  除非允许重复执行
      const { type, method = 'replace', payload, fn = function () {}, params = '{time: 1602050795339}' } = payloadAll
      if (!type) throw Error('actionBehavior 必须存在')
      if (state.preBehavior === JSON.stringify(payloadAll)) return false // 防止redux重复触发
      commit('preBehavior', JSON.stringify(payloadAll))
      switch (type) {
        case 'router':
          if (!method) return false
          router[method]({ path: payload })
          break
        case 'fn':
          try {
            fn(JSON.parse(params))
          } catch (error) {
            console.error(error)
          }
          break
        default:
          break
      }
    }
  },
  // 自定义方便获取common值得方法
  getters: {}

}
