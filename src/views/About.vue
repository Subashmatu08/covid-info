<template>
  <nav-bar />
  <div class="container">
    <div class="simply" style="height: 30vh"></div>
    <h1 class="is-size-2 pt-2">This is The About Page</h1>
    <p class="is-size-5">Page under construction</p>
    <div class="simply" style="height: 50vh"></div>
  </div>
  <Footer />
  <bottom-nav />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { onMounted } from "vue";
import BottomNav from "../components/BottomNav.vue";
export default {
  components: {
    NavBar,
    Footer,
    BottomNav,
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style lang="sass"></style>
