import microRules from '@/micro-handler/app/active-rules'
export const isMainRouteError404 = (to) => {
  const isMicro = Object.values(microRules).some(v => to.path.startsWith(v))
  return !(isMicro)
}
