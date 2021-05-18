<template>
  <NavBar />
  <div style="height: 25vh"></div>
  <div class="container">
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
    </div>
    <!--Row Two-->
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
    </div>
    <!--Row Three-->
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
.covidcard {
  background: rgba(255, 255, 255, 0.466);
  min-height: 15vh;
  border-radius: 5px;
  color: black;
  padding: 10px;
  border: 1.5px solid black;
  box-shadow: 5px 5px 3px rgb(27, 27, 27);
  .covidtop {
    display: flex;
    justify-content: space-between;
  }
  .covidmiddle {
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: 1024px) {
  .container {
    margin: auto 30px;
  }
}
</style>
