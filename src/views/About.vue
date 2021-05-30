<template>
  <div class="container">
    <div class="simply" style="height: 30vh"></div>
    <h1 class="is-size-2 pt-2">This is The About Page</h1>
    <p class="is-size-5">Page under construction</p>
    <div class="simply" style="height: 50vh"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  components: {},
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style lang="sass"></style>
