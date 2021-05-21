<template>
  <div class="openingimg"></div>
</template>

<script>
export default {};
</script>

<style>
.openingimg {
  min-height: 70vh;
  background: url("../assets/bg2.jpg") center no-repeat;
  background-size: cover;
}
@media screen and (max-width: 769px) {
  .openingimg {
    min-height: 45vh;
    background-size: cover;
  }
}
</style>
