<template>
  <footer class="footer">
    <div class="footercontent">
      <p class="footertext">
        RJY Covid Info by
        <a href="https://subashmatu.netlify.app" target="_blank" class="to"
          >Subash Matu</a
        >
      </p>
      <p class="footerdesc">Stay Home Stay Safe</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  margin-top: 20px;
  min-height: 5vh !important;
  padding: 0 !important;
  background: rgb(250, 247, 247) !important;
  color: black;
  font-weight: 500;
  box-shadow: 0px 1px 5px rgb(197, 196, 196);
  position: absolute;
  top: 100;
  width: 100%;
}
.footercontent {
  display: flex !important;
  flex-direction: row;
}
.footercontent > * {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  vertical-align: middle;
}
.to {
  color: black;
  font-weight: 700;
}

@media screen and (max-width: 1024px) {
  footer {
    display: none;
  }
}
</style>
