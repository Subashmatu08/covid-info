<template>
  <NavBar />
  <div style="height: 100vh"></div>
  <Footer />
  <GoTop />
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import { onMounted } from "vue";
export default {
  components: {
    NavBar,
    Footer,
    GoTop,
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style></style>
