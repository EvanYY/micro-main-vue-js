<template>
 <div>
    我是Main
    <div @click="goPath('vue')" >vue</div>
    <div @click="goPath('react')">react</div>
    <router-view />
    <!-- <iframe src="https://micro-test.leadscloud.com/micro-app1" frameborder="2" width="1000px" height="500px"></iframe> -->
 </div>
</template>

<script>
import _isFunction from 'lodash/isFunction'
export default {
  name: 'Main',
  components: {},
  mixins: [],
  props: {},
  watch: {
    '$route' (val) {
      console.log(val)
    }
  },
  computed: {},
  data () {
    return {}
  },
  methods: {
    test () {
      return false
    },
    goPath (path) {
      debugger
      this.$router.push({ path: `${path}` })
    }
  },
  created () {},
  mounted () {
    console.log(_isFunction(this.test))
    // console.log(process.env.NODE_ENV)
    // console.log(process.env.BASE_URL)
    // console.log(process.env.VUE_APP_MODE)
  },
  beforeDestroy () {}
}
</script>

<style scoped lang='scss'>

</style>
