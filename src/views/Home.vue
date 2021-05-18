<template>
  <NavBar />
  <div style="height: 25vh"></div>
  <div class="title has-text-center">
    <p class="is-size-3 pl-5 has-text-white">Please Select One Option</p>
  </div>
  <div class="content is-size-5">
    <div class="columns">
      <div class="column">
        <router-link to="/oxygen">
          <div class="a">
            <h4>Oxygen Supplies</h4>
            <p>Oxygen Suppliers near in the region</p>
          </div></router-link
        >
      </div>
      <div class="column">
        <router-link to="/blood-test">
          <div class="a">
            <h4>Blood Test</h4>
            <p>Find Places that Test Blood</p>
          </div></router-link
        >
      </div>
      <div class="column">
        <router-link to="/covid-test">
          <div class="a">
            <h4>Covid Test</h4>
            <p>Find all the locations for Covid Testing</p>
          </div></router-link
        >
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <router-link to="/doctors">
          <div class="a">
            <h4>Doctors</h4>
            <p>Find a Doctor</p>
          </div></router-link
        >
      </div>
      <div class="column">
        <router-link to="/hospitals">
          <div class="a">
            <h4>Hospital</h4>
            <p>Find a Hospital</p>
          </div></router-link
        >
      </div>
      <div class="column">
        <router-link to="/hospital-beds">
          <div class="a">
            <h4>Hospital Beds</h4>
            <p>Find a Hospital Bed</p>
          </div></router-link
        >
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <router-link to="/ambulance">
          <div class="a">
            <h4>Ambulance</h4>
            <p>Call an Ambulance</p>
          </div></router-link
        >
      </div>
      <div class="column">
        <router-link to="/remedesivir">
          <div class="a">
            <h4>Remedesivir</h4>
            <p>Find where to get Remedisivir</p>
          </div></router-link
        >
      </div>
      <div class="column">
        <router-link to="/food-supplies">
          <div class="a">
            <h4>Food Supplies</h4>
            <p>Find Food Supplies</p>
          </div></router-link
        >
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
export default {
  components: {
    NavBar,
    Footer,
    GoTop,
  },
};
</script>

<style lang="scss">
.a {
  background: rgba(255, 255, 255, 0.466);
  min-height: 15vh;
  margin: 10px 15px;
  border-radius: 5px;
  color: black;
  padding: 10px;
  border: 1.5px solid black;
  box-shadow: 5px 5px 3px rgb(27, 27, 27);
}
.a:active {
  box-shadow: 3px 3px 3px rgb(49, 48, 48);
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

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(131, 128, 128, 0);
}
</style>
