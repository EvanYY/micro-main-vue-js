
// 全局状态观察池
export default {
  namespaced: true,
  state: {
    behaviorPools: []
  },
  mutations: {

  },
  actions: {
    // 在这个模块中， dispatch 和 commit 也被局部化了
    // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
    actionBehavior ({ state, commit, rootState, dispatch, getters, rootGetters }) {
      debugger
    }
  },
  // 自定义方便获取common值得方法
  getters: {}

}
