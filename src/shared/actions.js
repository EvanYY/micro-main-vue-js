// import { handleActions } from 'redux-actions'
// // 异步策略
// const cache2 = () => ({})
// export const gFormCache2 = handleActions({
//   'set gform cache2' (state, action) {
//     const { cacheKey, cacheContent } = action.payload
//     if (cacheKey === undefined) {
//       throw new Error('cacheKey不能是undefined')
//     }
//     if (cacheContent === undefined) {
//       throw new Error('cacheContent不能是undefined')
//     }
//     state[cacheKey] = { ...state[cacheKey], ...cacheContent }
//     return { ...state }
//   },
//   'clear gform cache2' (state, action) {
//     return cache2()
//   }
// }, cache2())
