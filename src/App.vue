<template>
  <div id="app">
     <LogedInNav />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import LogedInNav from './components/LogedinNav.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    LogedInNav,
    Footer
  },
  mounted () {
    this.$store.dispatch('COLLECT_PROJECTS', this.$store.state.projectModule.perPage + '/' + this.$store.state.projectModule.page)
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
