<template>
  <div class="home">
    <h1>Hello Daddy FUCK</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash'
import Antd from 'ant-design-vue'
console.log(Antd)
export default {
  name: 'Home',
  components: {
  },
  mounted () {
    console.log(_.isFunction(this._initMenus))
  }
}
</script>
