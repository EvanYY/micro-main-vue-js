<template>
  <div class="home">
    <h1 @click="getShared">Hello Daddy FUCK</h1>
    <h1 @click="dispatchs">dispatch</h1>
    <h1 @click="reset">reset</h1>
    <h1 @click="dispatchs">dispatch</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import { createStore } from 'redux'
import store from '@/shared'
import _ from 'lodash'
import Antd from 'ant-design-vue'
console.log(Antd)
export default {
  name: 'Home',
  data () {
    return {
      store: null
    }
  },
  components: {
  },
  mounted () {
    console.log(_.isFunction(this._initMenus))
  },
  methods: {
    getShared () {
      console.log(store.getState())
    },
    dispatchs () {
      store.dispatch({ type: 'COMMON_SET_VALUE', payload: { default: Math.random() }})
      this.getShared()
    },
    reset () {
      const { common } = store.getState()
      store.dispatch({ type: 'COMMON_RESET', payload: { status: !common.status }})
      this.getShared()
    }
  }
}
</script>
