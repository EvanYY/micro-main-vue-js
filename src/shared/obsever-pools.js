import { cloneDeep } from 'lodash'
import store from '@/store'
// state stateDefault
const stateDefault = {}
// stateDefault state 值的操作
const Action = (state = {}, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case 'TOUCH_BEHAVIOR':
      // if (isObject(payload)) {
      //   for (const k in payload) {
      //     if (state[k]) state[k] = payload[k]
      //   }
      // }
      store.dispatch('actionBehavior')
      debugger
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
