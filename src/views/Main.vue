<template>
 <div>
    我是Main
 </div>
</template>

<script>

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
  methods: {},
  created() {},
  mounted() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.BASE_URL);
    console.log(process.env.VUE_APP_MODE);
  },
  beforeDestroy () {},
}
</script>

<style scoped lang='scss'>

</style>
