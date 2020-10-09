import rules from './active-rules'
// import lifeCycle from './life-cycle'
export const isType = (location, compare) => {
  return location.pathname.startsWith(compare)
}
export const apps = [{ name: 'MicroAppCrm' }, { name: 'MicroAppReport' }].map(v => ({
  name: v.name,
  id: v.id,
  activeRule: (location) => isType(location, rules[v.name])
}))
