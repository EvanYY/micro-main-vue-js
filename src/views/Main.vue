<template>
 <div>
    <div class="test">我是Main</div>
    <div @click="goPath('app1')" >vue</div>
    <router-view :key="(new Date()).getTime()"/>
    <!-- <iframe src="https://micro-test.leadscloud.com/micro-app1" frameborder="2" width="1000px" height="500px"></iframe> -->
 </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'Main',
  beforeRouteEnter (to, from, next) {
    console.log('main to', to)
    console.log('main from', from)
    console.log('main next', next)
    next(vm => {
      return true
    })
  },
  beforeRouteLeave (to, from, next) {
    console.log(to)
    console.log(from)
    console.log(next)
    next()
  },
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
      this.$router.push({ path: `/${path}` })
    }
  },
  created () {},
  mounted () {
    console.log(_.isFunction(this.test))
    // console.log(process.env.NODE_ENV)
    // console.log(process.env.BASE_URL)
    // console.log(process.env.VUE_APP_MODE)
  },
  beforeDestroy () {
    console.log('main beforeDestroy')
  }
}
</script>
<style lang="scss" scoped>
.test {
  color:aqua
}

</style>
