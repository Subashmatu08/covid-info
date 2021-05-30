<template>
  <page-under-const />
</template>

<script>
import { onMounted } from "vue";
import PageUnderConst from "../components/PageUnderConst";
export default {
  components: {
    PageUnderConst,
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style></style>
