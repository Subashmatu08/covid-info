<template>
  <nav-bar />
  <open-img />
  <h1 class="is-size-2 pt-2">This is The Feedback Page</h1>
  <p class="is-size-5">Content Coming Soon!!</p>
  <div class="simply" style="height: 50vh"></div>
  <Footer />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import OpenImg from "../components/OpenImg.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    OpenImg,
    NavBar,
    Footer,
  },
};
</script>

<style lang="sass"></style>
