// import { cloneDeep } from 'lodash'
import store from '@/store'
// state stateDefault
const stateDefault = () => ({})
// stateDefault state 值的操作
const Action = (state = {}, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case 'TOUCH_BEHAVIOR':
      // console.log('TOUCH_BEHAVIOR', payload)
      // state.direction = payload
      store.dispatch('behaviors/actionBehavior', payload)
      break
    default:
      break
  }
  return state
}
const reducer = (state = stateDefault(), action = {}) => {
  // action 匹配 key todo ===>>>> {type, payload}
  return Action(state, action) !== undefined ? Action(state, action) : state
}
export default reducer
