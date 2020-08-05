import { initGlobalState } from 'qiankun'
import propModule from './state-module'
// 初始化 state
// const actions: MicroAppStateActions = initGlobalState(propModule.reqModule())
const actions = initGlobalState(propModule)
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev)
})


export default actions
