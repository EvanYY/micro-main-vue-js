<template>
  <div id="main-app">
    <router-view />
    <section id="frame"></section>
  </div>
</template>

<script>
export default {
  watch: {
    '$route' (val) {
      console.log('$route', val)
    }
  }
}
</script>
