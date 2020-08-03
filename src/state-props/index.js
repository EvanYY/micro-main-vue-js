import { initGlobalState } from '@/micro/es/globalState'

class PropModile {
  pools = {

  }

  reqModule () {
    return {
      token: '',
      vistoryId: ''
    }
  }

  observerPools (targert = '', reqData = null) {
    if (typeof targert === 'string') {
      this.pools[targert] ? this.pools[targert](reqData) : console.error(targert + 'can not find method')
    }
  }

  restModule () {
    return this.getModule()
  }
}
const propModule = new PropModile()
const prop = initGlobalState(propModule.reqModule())
export default prop
