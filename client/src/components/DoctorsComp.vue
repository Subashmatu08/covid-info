<template>
  <div class="covidcard">
    <div class="columns">
      <div class="column">
        <div class="covidtop">
          <h5 class="is-size-4 has-text-weight-semibold text-uppercase">
            {{ doctorTitle }}
          </h5>
          <!-- <p class="is-size-6 has-text-success pr-4">{{ doctorVerify }}</p> -->
          <p class="is-size-6 has-text-success pr-4" v-if="doctorVerify">
            Verified
          </p>
          <p class="is-size-6 has-text-warning pr-4" v-else>Not Verified</p>
        </div>
      </div>
    </div>
    <div class="columns">
      <h4 class="is-size-6 column">
        {{ doctorAddress }}<br />
        Ph.No : <a :href="`tel:+91${doctorPhone}`">{{ doctorPhone }}</a>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "doctorTitle",
    "doctorVerify",
    "doctorAddress",
    "doctorPhone",
    // "doctorRtpcr",
    // "doctorRapid",
  ],
};
</script>

<style lang="scss" scoped>
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
