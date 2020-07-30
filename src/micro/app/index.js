const { entrys } = require(`./${process.env.NODE_ENV}`)
const url = process.env.VUE_APP_MICRO_URL
const microApps = [{ name: 'MicroAppCrm', activeRule: '/crm' }, { name: 'MicroAppReport', activeRule: '/report' }].map(v => {
  return {
    ...v,
    container: '#mount-app-container',
    entry: url + entrys[v.name]
  }
})
console.log('microApps', microApps)
export default microApps
