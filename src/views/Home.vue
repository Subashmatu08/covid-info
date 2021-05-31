<template>
  <!-- <loader v-if""isLoading/>
  const isLoadign ref 9fatu
  fcuntion loaded {
    isLoading.valeue = false
  } -->
  <loader v-if="isLoading" />
  <div class="wrapper" v-else>
    <OpenImg />
    <div class="container">
      <div class="title has-text-center">
        <p class="pt-5 pb-2 has-text-black">
          The One Place for all Covid Related Information in
          <span style="color: rgb(53, 177, 140)">Rajahamundry</span>
        </p>
      </div>
      <div class="content is-size-5">
        <div class="columns">
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
        </div>
        <div class="columns">
          <div class="column">
            <router-link to="/doctors">
              <div class="maincards">
                <h4 class="maincardshead">
                  <i class="fas fa-user-md-chat"></i> Doctors
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
  </div>
</template>

<script>
import OpenImg from "../components/OpenImg.vue";
import Loader from "../components/loader.vue";
import { onMounted, ref } from "vue";
export default {
  components: {
    OpenImg,
    Loader,
  },
  setup() {
    const isLoading = ref(true);
    onMounted(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      isLoading.value = false;
      window.scroll({
        top: 0,
        left: 0,
      });
    });
    return {
      isLoading,
    };
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
  padding: 0.5em;
}
.maincards:hover {
  // background: rgb(126, 199, 248);
  // background: rgb(72, 241, 191) !important ;
  background: rgb(53, 177, 140) !important;
  color: white;
  transition: 0.3s ease-in-out;
  .maincardshead {
    color: white;
  }
}
.maincardshead {
  padding: 0.5em;
  margin: 0 !important;
}
.column {
  padding: auto 0 !important;
}

@media screen and (max-width: 1024px) {
  .maincards {
    min-height: 30vh;
  }
}

@media screen and (max-width: 769px) {
  .container {
    margin: auto 30px;
  }
  .maincards {
    min-height: 15vh;
    border-radius: 10px;
  }

  .title {
    font-size: 20px;
    text-align: center;
    line-height: 1.3em;
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
