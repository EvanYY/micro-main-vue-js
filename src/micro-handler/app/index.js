import { apps } from './base-list'
// import props from '@/state-props'
import shared from '@/shared'

const { entrys } = require(`./${process.env.NODE_ENV}`)
const url = process.env.VUE_APP_MICRO_URL
const microApps = apps.map(v => {
  return {
    ...v,
    container: '#mount-app-container',
    entry: url + entrys[v.name],
    props: { context: v, shared, NODE_ENV: process.env.NODE_ENV }
  }
})
console.log('microApps', microApps)
export default microApps
