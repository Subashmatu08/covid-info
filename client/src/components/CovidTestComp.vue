<template>
  <div class="covidcard">
    <div class="columns">
      <div class="column">
        <div class="covidtop">
          <h5 class="is-size-4 has-text-weight-semibold text-uppercase">
            {{ covidTitle }}
          </h5>
          <p class="is-size-6 has-text-success pr-4">{{ covidVerify }}</p>
        </div>
      </div>
    </div>
    <div class="columns">
      <h4 class="is-size-6 column">
        <!-- {{ covidAddress }}<br /> -->
        Ph.No : <a :href="`tel:+91${covidPhone}`">{{ covidPhone }}</a
        ><br />
        Officer Ph.No :
        <a :href="`tel:+91${covidPhonetwo}`">{{ covidPhonetwo }}</a>
      </h4>
      <!-- <p class="is-size-6 column p-4 has-text-right">
        <span>
          RTPCR
          <i
            class="far fa-check-circle has-text-success pr-2"
            v-show="covidRtpcr"
          ></i>
          <i
            class="far fa-times-circle has-text-danger pr-2"
            v-show="!covidRtpcr"
          ></i>
        </span>
        <span>
          Rapid Antigen
          <i
            class="far fa-check-circle has-text-success"
            v-show="covidRapid"
          ></i>
          <i
            class="far fa-times-circle has-text-danger"
            v-show="!covidRapid"
          ></i>
        </span>
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "covidTitle",
    "covidVerify",
    "covidAddress",
    "covidPhone",
    "covidPhonetwo",
    // "covidRtpcr",
    // "covidRapid",
  ],
};
</script>

<style lang="scss">
.covidcard {
  min-height: 25vh !important;
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
