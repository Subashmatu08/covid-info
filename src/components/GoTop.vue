<template>
  <!--Back to the top button -->
  <a class="goup" @click="ToTop">
    <span class="icon goup1" :class="{ GoupShown }" style="zoom: 2 !important">
      <ion-icon name="arrow-up-circle-outline"></ion-icon>
    </span>
  </a>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const GoupShown = ref(false);
    function handleScroll() {
      if (window.scrollY > 100) {
        GoupShown.value = true;
      } else if (window.scrollY < 100) {
        GoupShown.value = false;
      }
    }
    // function ToTop() {
    //   window.scrollTo(0, 0);
    // }
    function ToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    return {
      GoupShown,
      ToTop,
    };
  },
};
</script>

<style>
.goup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgb(72, 241, 191);
  color: black;
  text-align: center;
  border-radius: 50%;
}
.goup:hover {
  color: black;
}

.goup1 {
  display: none;
}
.GoupShown {
  display: block !important;
  padding-top: 1.5px;
}
</style>
