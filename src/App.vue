<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import navBar from './components/Partials/nav'
import footerBar from './components/Partials/footer'

export default {
  name: 'app',
  components: { navBar, footerBar }
}
</script>
<style lang="scss">
body {
  margin: 0px;
}
h1, h2, h3, h4 {
  margin: 0px;
}
a {
	text-decoration: none;
}
</style>
