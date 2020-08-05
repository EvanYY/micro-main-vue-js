<template>
  <div class="home">
    <h1 @click="getShared">Hello Daddy FUCK</h1>
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
    // this.store = createStore(shared)
    console.log(_.isFunction(this._initMenus))
  },
  methods: {
    getShared () {
      console.log(store.getState())
    },
    dispatchs () {
      const { common } = store.getState()
      store.dispatch({ type: 'SET_STATUS', payload: !common.status })
      store.dispatch({
        type: 'DECREMENT',
        text: 'Use Redux'
      })
      this.getShared()
    }
  }
}
</script>
