<template>
  <nav-bar />
  <main>
    <router-view />
  </main>
  <Footer />
  <bottom-nav />
  <go-top />
</template>
<script>
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.vue";
import GoTop from "./components/GoTop.vue";
import BottomNav from "./components/BottomNav.vue";

export default {
  components: {
    Footer,
    NavBar,
    GoTop,
    BottomNav,
  },
};
</script>

<style lang="scss">
main {
  min-height: 100vh;
}
@media screen and (max-width: 1024px) {
  body {
    padding-bottom: 10vh;
  }
}
</style>
