<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Store from './store/index'

export default {
  name: 'App',
  store: Store,
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
