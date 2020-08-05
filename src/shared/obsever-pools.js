import { isObject } from 'lodash'
class Pools {
  obsever (a, b, c) {
    // 值变化操作
    console.log(a)
    console.log(b)
    console.log(c)
  }

  isObject (val) {
    return isObject(val)
  }
}
export const pools = new Pools()

