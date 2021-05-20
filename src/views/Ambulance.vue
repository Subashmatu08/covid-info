<template>
  <NavBar />
  <div style="height: 100vh"></div>
  <Footer />
  <GoTop />
  <bottom-nav />
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import { onMounted } from "vue";
import BottomNav from "../components/BottomNav.vue";

export default {
  components: {
    NavBar,
    Footer,
    GoTop,
    BottomNav,
  },
  setup() {
    onMounted(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  },
};
</script>

<style></style>
