<template>
  <div>
    <div id="12312312312" @click="pushs">123123123123</div>
  </div>
</template>

<script>
import store from '@/shared'
export default {
  name: 'testAction',
  props: [],
  data () {
    return {}
  },
  computed: {},
  watch: {},
  components: {},
  methods: {
    pushs () {
      store.dispatch({ type: 'TOUCH_TEST', payload: 1 })
    }
  },
  created () {},
  mounted () {},
  beforeDestory () {}
}
</script>

<style lang="scss" scoped>

</style>
