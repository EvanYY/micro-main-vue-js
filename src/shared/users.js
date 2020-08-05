import { isObject, cloneDeep } from 'lodash'
// state user
const stateDefault = {
  // 登录账户ID
  userUID: null,
  AccId: null,
  // 用户名片
  myInfo: {},
  // 好友/黑名单/陌生人名片, 数据结构如：{cid: {attr: ...}, ...}
  userInfos: {},
  // 用户订阅的事件同步, 数据结构如：{cid: {typeid: {...}, ...}, ...}
  userSubscribes: {},
  default: 2
}
// stateDefault state 值的操作
const Action = (state = {}, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case 'USERS_SET_VALUE':
      if (isObject(payload)) {
        for (const k in payload) {
          if (state[k]) state[k] = payload[k]
        }
      }
      break
    case 'USERS_CLEAR':
      state = null
      break
    case 'USERS_RESET':
      state = cloneDeep(stateDefault)
      break
    default:
      break
  }
  return state
}
const reducer = (state = cloneDeep(stateDefault), action = {}) => {
  // action 匹配 key todo ===>>>> {type, payload}
  return Action(state, action) !== undefined ? Action(state, action) : state
}
export default reducer
