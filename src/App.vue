<template>
  <div id="app">
    <TheHome />
    <portal-target name="options"></portal-target>
  </div>
</template>

<script>
import TheHome from './components/TheHome.vue'

export default {
  components: {
    TheHome
  },
  name: 'App'
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
