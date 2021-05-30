<template>
  <NavBar />
  <div style="height: 15vh"></div>
  <div class="container">
    <div class="title has-text-center">
      <p class="is-size-4 pt-3 has-text-black">Places Taking Covid Test</p>
    </div>

    <div class="covidcontent">
      <covid-test-comp
        v-for="(hospital, index) in covidHospitals"
        :covidTitle="hospital['covid-title']"
        :covidVerify="hospital['covid-verify']"
        :covidPhone="hospital['covid-phone']"
        :covidAdress="hospital['covid-address']"
        :key="index"
      />
    </div>

    <!-- <div class="columns">
      <div class="column">
        <div class="covidcard">
          <div class="columns">
            <div class="column">
              <div class="covidtop">
                <h4 class="is-size-3 has-text-weight-semibold">Jagruthi</h4>
                <p class="is-size-6 has-text-success pr-4">Verified</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <h4 class="is-size-6 column">
              Gandhipuram-2,Rajahmundry<br />
              Ph.No : <a href="tel:+917794970883">0883-000000</a>
            </h4>
            <p class="is-size-6 column p-4 has-text-right">
              RTPCR
              <i class="far fa-check-circle has-text-success pr-2"></i>
              Rapid-Antigen
              <i class="far fa-times-circle has-text-danger"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="covidcard">
          <div class="columns">
            <div class="column">
              <div class="covidtop">
                <h4 class="is-size-3 has-text-weight-semibold">Thyrocare</h4>
                <p class="is-size-6 has-text-success pr-4">Verified</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <h4 class="is-size-6 column">
              Near TTD Kalyana Mandapam,Rajahmundry<br />
              Ph.No : <a href="tel:+917794970883">0883-034743</a>
            </h4>
            <p class="is-size-6 column p-4 has-text-right">
              RTPCR
              <i class="far fa-check-circle has-text-success pr-2"></i>
              Rapid-Antigen
              <i class="far fa-check-circle has-text-success"></i>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="covidcard">
          <div class="columns">
            <div class="column">
              <div class="covidtop">
                <h4 class="is-size-3 has-text-weight-semibold">PHC</h4>
                <p class="is-size-6 has-text-success pr-4">Verified</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <h4 class="is-size-6 column">
              Morumpudi,Rajahmundry<br />
              Ph.No : <a href="tel:+917794970883">0883-000000</a>
            </h4>
            <p class="is-size-6 column p-4 has-text-right">
              RTPCR
              <i class="far fa-check-circle has-text-success pr-2"></i>
              Rapid-Antigen
              <i class="far fa-check-circle has-text-success"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="covidcard">
          <div class="columns">
            <div class="column">
              <div class="covidtop">
                <h4 class="is-size-3 has-text-weight-semibold">PHC</h4>
                <p class="is-size-6 has-text-success pr-4">Verified</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <h4 class="is-size-6 column">
              Narayanapuram,Rajahmundry<br />
              Ph.No : <a href="tel:+917794970883">0883-007800</a>
            </h4>
            <p class="is-size-6 column p-4 has-text-right">
              RTPCR
              <i class="far fa-check-circle has-text-success pr-2"></i>
              Rapid-Antigen
              <i class="far fa-check-circle has-text-success"></i>
            </p>
          </div>
        </div>
      </div>
    </div>-->
  </div>
  <Footer />
  <GoTop />
  <bottom-nav />
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import { onMounted } from "vue";
import BottomNav from "../components/BottomNav.vue";
import CovidTestComp from "../components/CovidTestComp";
export default {
  components: {
    NavBar,
    Footer,
    GoTop,
    BottomNav,
    CovidTestComp,
  },
  setup() {
    const covidHospitals = [
      {
        "covid-title": "Jagruthi",
        "covid-verify": "Verified",
        "covid-address": "Gandhipuram-2,Rajahmundry",
        "covid-phone": "348575345",
      },

      {
        "covid-title": "Thyrocare",
        "covid-verify": "Verified",
        "covid-address": "Near TTD Kalyana Mandapam,Rajahmundry",
        "covid-phone": "0883-034743",
      },

      {
        "covid-title": "PHC",
        "covid-verify": "Verified",
        "covid-address": "Morumpudi,Rajahmundry",
        "covid-phone": "348575345",
      },

      {
        "covid-title": "PHC",
        " covid-verify": "Verified",
        "covid-address": "Narayanapuram,Rajahmundry",
        "covid-phone": "348575345",
      },
    ];

    onMounted(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    });

    return {
      covidHospitals,
    };
  },
};
</script>

<style lang="scss">
.covidcontent {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}
</style>
