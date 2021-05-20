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
              <h4 class="maincardshead">
                <i class="fas fa-lungs"></i> Oxygen Supply
              </h4>
              <p class="maincardsdesc">Find Places to get Oxygen Cylinders</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/blood-test">
            <div class="maincards">
              <h4 class="maincardshead">
                <i class="fas fa-microscope"></i> Blood Test
              </h4>
              <p class="maincardsdesc">Find Places that Test Blood</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/covid-test">
            <div class="maincards">
              <h4 class="maincardshead">
                <i class="fas fa-microscope"></i> Covid Test
              </h4>
              <p class="maincardsdesc">
                Find all the locations for Covid Testing
              </p>
            </div></router-link
          >
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <router-link to="/doctors">
            <div class="maincards">
              <h4 class="maincardshead">
                <i class="fas fa-user-md"></i> Doctors
              </h4>
              <p class="maincardsdesc">Find a Doctor</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/hospitals">
            <div class="maincards">
              <h4 class="maincardshead">
                <i class="fas fa-hospital"></i> Hospital
              </h4>
              <p class="maincardsdesc">Find a Hospital</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/hospital-beds">
            <div class="maincards">
              <h4 class="maincardshead">
                <i class="fas fa-procedures"></i> Hospital Beds
              </h4>
              <p class="maincardsdesc">Find a Hospital Bed</p>
            </div></router-link
          >
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <router-link to="/ambulance">
            <div class="maincards">
              <h4 class="maincardshead">
                <i class="fas fa-ambulance"></i> Ambulance
              </h4>
              <p class="maincardsdesc">Call an Ambulance</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/remedesivir">
            <div class="maincards">
              <h4 class="maincardshead">
                <i class="fas fa-syringe"></i> Remedesivir
              </h4>
              <p class="maincardsdesc">Find where to get Remedisivir</p>
            </div></router-link
          >
        </div>
        <div class="column">
          <router-link to="/food-supplies">
            <div class="maincards">
              <h4 class="maincardshead">
                <i class="fas fa-utensils"></i> Food Supplies
              </h4>
              <p class="maincardsdesc">Find Food Supplies</p>
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
  min-height: 25vh;
  border-radius: 5px;
  color: black;
  padding: 10px;
  box-shadow: 2px 2px 12px rgb(197, 196, 196);
}
.maincardsdesc {
  padding: 20px 0;
}
.maincards:hover {
  background: rgb(126, 199, 248);
  color: white !important;
  .maincardshead {
    color: white;
    font-size: 30px;
  }
}

h4 {
  font-size: 30px;
}
.column {
  padding: auto 0 !important;
}

@media screen and (max-width: 765px) {
  .container {
    margin: auto 30px;
  }
  .maincards {
    min-height: 15px;
    border-radius: 10px;
  }
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(138, 138, 138, 0);
}
</style>
