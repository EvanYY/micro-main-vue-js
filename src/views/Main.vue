<template>
 <div>
    我是Main
 </div>
</template>

<script>
import _isFunction from 'lodash/isFunction'
export default {
  name: 'Main',
  components: {},
  mixins: [],
  props: {},
  watch: {},
  computed: {},
  data () {
    return {}
  },
  methods: {
    test () {
      return false
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
