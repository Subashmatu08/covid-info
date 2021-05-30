<template>
  <NavBar />
  <page-under-const />
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
import PageUnderConst from "../components/PageUnderConst.vue";
export default {
  components: {
    NavBar,
    Footer,
    GoTop,
    BottomNav,
    PageUnderConst,
  },
  setup() {
    onMounted(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    });
  },
};
</script>

<style></style>
