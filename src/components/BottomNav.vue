<template>
  <div class="btnav">
    <router-link to="/" class="homebtn">
      <i class="fas fa-home-lg-alt"></i>
    </router-link>
    <router-link to="/about" class="aboutbtn">
      <i class="fas fa-users"></i>
    </router-link>
    <router-link to="/feedback" class="contactbtn">
      <i class="fas fa-comments-alt"></i>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.btnav {
  display: none;
}
@media screen and (max-width: 1024px) {
  .btnav {
    display: block !important;
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex !important;
    flex-direction: row;
    justify-content: space-around;
    font-size: 30px;
    box-shadow: 0px 1.5px 7px rgb(197, 196, 196);
    height: 4rem;
    align-items: center;
    position: fixed;
    bottom: 0;
  }
  .btnav > * {
    width: 100%;
    text-align: center;
    border-right: 0.5px solid rgb(182, 181, 181);
  }
}
</style>
