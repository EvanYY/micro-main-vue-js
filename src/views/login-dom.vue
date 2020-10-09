<template>
  <div id="custom-login" ref="microAppLogin"></div>
</template>

<script type="text/javascript">
import { handleStart } from '@/micro-handler'
export default {
  name: 'microLogin',
  data () {
    return {
      microApp: null
    }
  },
  mounted () {
    this.microApp = handleStart('login', this.$refs.microAppLogin)
  },
  beforeDestroy () {
    this.microApp.unmount()
  }
}
</script>

<style lang="scss" scoped>
#custom-login {
  width: 100%;
  height: 100%;
}
</style>
