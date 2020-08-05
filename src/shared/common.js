import { common, commonAction } from './Module'
const reducer = (state = common, action = {}) => {
  // action 匹配 key todo ===>>>> {type, payload}
  return commonAction(state, action) !== undefined ? commonAction(state, action) : state
}
export default reducer
