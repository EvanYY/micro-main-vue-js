import { apps } from './base-list'
import props from '@/state-props'
const { entrys } = require(`./${process.env.NODE_ENV}`)
const url = process.env.VUE_APP_MICRO_URL
const microApps = apps.map(v => {
  return {
    ...v,
    container: '#mount-app-container',
    entry: url + entrys[v.name],
    props
  }
})
console.log('microApps', microApps)
export default microApps
