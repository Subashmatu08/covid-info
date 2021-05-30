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
      window.scroll({
        top: 0,
        left: 0,
      });
    });
  },
};
</script>

<style></style>
