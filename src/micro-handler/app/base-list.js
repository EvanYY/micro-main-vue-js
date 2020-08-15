import rules from './active-rules'
// import lifeCycle from './life-cycle'
export const isType = (location, compare) => {
  return location.pathname.startsWith(compare)
}
export const apps = ['MicroAppCrm', 'MicroAppReport'].map(v => ({
  name: v,
  activeRule: (location) => isType(location, rules[v])
}))
