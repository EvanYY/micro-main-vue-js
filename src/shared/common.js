import { isObject, cloneDeep } from 'lodash'

// state stateDefault
const stateDefault = {
  status: true,
  default: 1
}
// stateDefault state 值的操作
const Action = (state = {}, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case 'COMMON_SET_VALUE':
      if (isObject(payload)) {
        for (const k in payload) {
          if (state[k]) state[k] = payload[k]
        }
      }
      break
    case 'COMMON_CLEAR':
      state = null
      break
    case 'COMMON_RESET':
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
