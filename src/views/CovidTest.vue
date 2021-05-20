<template>
  <NavBar />
  <open-img />

  <div class="container">
    <div class="title has-text-center">
      <p class="is-size-3 pt-3 has-text-black">Places Taking Covid Test</p>
    </div>
    <!--Row One-->
    <div class="columns">
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
    <!--Row Two-->
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
    </div>
    <!-- Row Three
    <div class="columns">
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
    </div> -->
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
.covidcard {
  min-height: 30vh !important;
  border-radius: 5px;
  color: black;
  padding: 10px;
  box-shadow: 2px 2px 12px rgb(197, 196, 196);
  .covidtop {
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: 1024px) {
  .container {
    margin: auto 30px;
  }
  .covidcard {
    border-radius: 10px;
  }
}
</style>
