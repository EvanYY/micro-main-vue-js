// import { isMainRouteError404 } from './isError'
export const beforeEach = (to, from, next) => {
  console.log('main beforeEach')
  // const is404 = isMainRouteError404(to)
  next()
}
