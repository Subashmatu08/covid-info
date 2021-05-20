<template>
  <!--Back to the top button -->
  <!-- <a class="goup" @click="ToTop">
    <span class="icon goup1" :class="{ GoupShown }">
      <i class="fal fa-arrow-circle-up icon"></i>
    </span>
  </a> -->
  <a class="goup" @click="ToTop" :class="{ GoupShown }">
    <i class="fal fa-arrow-circle-up icon"></i>
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

<style lang="scss">
.goup {
  display: none;
  .fa-arrow-circle-up:before {
    font-size: 30px;
    background: rgb(72, 241, 191);
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: black;
    text-align: center;
    border-radius: 50%;
    padding: 0.5rem;
  }
}
.GoupShown {
  display: block;
}
</style>
