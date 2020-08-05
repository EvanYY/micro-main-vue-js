// eslint-disable-next-line no-unused-vars
import { createStore, combineReducers } from 'redux'
import common from './common'

// import * as common from './common'
/**
 * @important reducer设计规则！！！！！！！
 *
 * combineReducers 的 reducer 都需满足以下规则：
 * 所有未匹配到的 action，必须把它接收到的第一个参数也就是那个 state 原封不动返回。
 * 永远不能返回 undefined。当过早 return 时非常容易犯这个错误，为了避免错误扩散，遇到这种情况时 combineReducers 会抛异常。
 * 如果传入的 state 就是 undefined，一定要返回对应 reducer 的初始 state。根据上一条规则，初始 state 禁止使用 undefined。使用 ES6 的默认参数值语法来设置初始 state 很容易，但你也可以手动检查第一个参数是否为 undefined
 */

export default createStore(combineReducers({ common }))
