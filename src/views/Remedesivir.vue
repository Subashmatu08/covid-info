<template>
  <NavBar />
  <open-img />
  <div style="height: 100vh"></div>
  <Footer />
  <GoTop />
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import OpenImg from "../components/OpenImg.vue";
export default {
  components: {
    NavBar,
    Footer,
    GoTop,
    OpenImg,
  },
};
</script>

<style></style>
