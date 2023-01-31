<template>
  <div class="covidcard">
    <div class="columns">
      <div class="column">
        <div class="covidtop">
          <h5 class="is-size-4 has-text-weight-semibold text-uppercase">
            {{ covidTitle }}
          </h5>
          <!-- <p class="is-size-6 has-text-success pr-4">{{ covidVerify }}</p> -->
          <p class="is-size-6 has-text-success pr-4" v-if="covidVerify">
            Verified
          </p>
          <p class="is-size-6 has-text-warning pr-4" v-else>Not Verified</p>
        </div>
      </div>
    </div>
    <div class="columns">
      <h4 class="is-size-6 column">
        {{ covidAddress }}<br />
        Ph.No : <a :href="`tel:+91${covidPhone}`">{{ covidPhone }}</a>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'covidTitle',
    'covidVerify',
    'covidAddress',
    'covidPhone',
    'covidRtpcr',
    'covidRapid',
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
