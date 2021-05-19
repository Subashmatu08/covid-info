<template>
  <NavBar />
  <OpenImg />
  <div class="container">
    <div class="title has-text-center">
      <p class="is-size-3 pt-3 has-text-black">Click Below</p>
    </div>
    <div class="content is-size-5">
      <div class="columns">
        <div class="column">
          <router-link to="/oxygen">
            <div class="maincards">
              <h4>Oxygen Supply</h4>
              <p>Find Places to get Oxygen Cylinders</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/blood-test">
            <div class="maincards">
              <h4>Blood Test</h4>
              <p>Find Places that Test Blood</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/covid-test">
            <div class="maincards">
              <h4>Covid Test</h4>
              <p>Find all the locations for Covid Testing</p>
            </div></router-link
          >
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <router-link to="/doctors">
            <div class="maincards">
              <h4>Doctors</h4>
              <p>Find a Doctor</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/hospitals">
            <div class="maincards">
              <h4>Hospital</h4>
              <p>Find a Hospital</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/hospital-beds">
            <div class="maincards">
              <h4>Hospital Beds</h4>
              <p>Find a Hospital Bed</p>
            </div></router-link
          >
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <router-link to="/ambulance">
            <div class="maincards">
              <h4>Ambulance</h4>
              <p>Call an Ambulance</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/remedesivir">
            <div class="maincards">
              <h4>Remedesivir</h4>
              <p>Find where to get Remedisivir</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/food-supplies">
            <div class="maincards">
              <h4>Food Supplies</h4>
              <p>Find Food Supplies</p>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <Footer />
  <GoTop />
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import OpenImg from "../components/OpenImg.vue";
export default {
  components: {
    NavBar,
    Footer,
    GoTop,
    OpenImg,
  },
};
</script>

<style lang="scss">
.maincards {
  min-height: 15vh;
  border-radius: 5px;
  color: black;
  padding: 10px;
  box-shadow: 2px 2px 12px rgb(167, 166, 166);
}
.a:hover {
  box-shadow: 0 !important;
}
h4 {
  font-size: 30px;
}
a::selection {
  background: transparent;
}

.column {
  padding: auto 0 !important;
}

@media screen and (max-width: 1024px) {
  .container {
    margin: auto 10px;
  }
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(138, 138, 138, 0.288);
}
</style>
