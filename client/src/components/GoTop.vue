<template>
  <!--Back to the top button -->
  <!-- <a class="goup" @click="ToTop">
    <span class="icon goup1" :class="{ GoupShown }">
      <i class="fal fa-arrow-circle-up icon"></i>
    </span>
  </a> -->
  <a class="goup" @click="ToTop">
    <i class="fal fa-arrow-circle-up icon" :class="{ GoupShown }"></i>
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
  .icon {
    text-align: center;
    font-size: 30px;
  }
  .icon::before {
    padding: 0.5rem;
    // background: rgb(72, 241, 191);
    background-color: rgba(128, 128, 128, 0.288) !important;
    backdrop-filter: blur(1px);
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    color: black;
    border-radius: 50%;
    transform: scale(0);
  }
}
.icon.GoupShown::before {
  transform: scale(1);
  transition: transform 170ms ease;
}

@media screen and (max-width: 1024px) {
  .fa-arrow-circle-up::before {
    position: fixed;
    bottom: 5rem !important;
    right: 1rem !important;
  }
}
</style>
