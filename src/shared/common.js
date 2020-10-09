import { isObject } from 'lodash'
import i18n from '@/locale'
import $cookie from 'js-cookie'

// state stateDefault
const stateDefault = () => ({
  // demo
  status: true,
  default: 1,
  reset: -1,
  // 询盘云全局变量
  isModeRead: true, // 模块是否已读
  ifSystem: '-1', // 是否是系统设置
  switchLang: $cookie.get('LANG') || 'zh-CN', // 语言
  sourceDocumentTitle: '询盘云管理系统' // 浏览器title
})
// stateDefault state 值的操作
const Action = (state = {}, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case 'COMMON_SET_VALUE':
      console.log('COMMON_SET_VALUE', payload)
      if (isObject(payload)) {
        for (const k in payload) {
          if (state[k]) state[k] = payload[k]
          if (k === 'ifSystem')localStorage.setItem('menu-list-system', payload[k]) // 设置系统数据
          if (k === 'switchLang') i18n.locale = payload[k] === 'zh-CN' ? 'zh-CN' : 'en-US' // 语言
          if (k === 'sourceDocumentTitle') window.parent.document.title = payload[k] // 浏览器title
        }
      }
      break
    // case 'COMMON_CLEAR':
    //   state = null
    //   break
    case 'COMMON_RESET':
      state = stateDefault()
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
