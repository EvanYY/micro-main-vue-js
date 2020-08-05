import _ from 'lodash'
import getRuntimePublicPathAddOn from './runtimePublicPath'
export default function getAddOns (global, publicPath) {
  return _.mergeWith({}, getRuntimePublicPathAddOn(global, publicPath), function (v1, v2) {
    return _.concat(v1 !== null && v1 !== undefined ? v1 : [], v2 !== null && v2 !== undefined ? v2 : [])
  })
}
