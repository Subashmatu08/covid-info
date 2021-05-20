<template>
  <nav-bar />
  <div class="simply" style="height: 200vh"></div>
  <BottomNav />
</template>

<script>
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar.vue";
import { onMounted } from "vue";
export default {
  components: {
    BottomNav,
    NavBar,
  },

  NavBarsetup() {
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

<style lang="scss"></style>
