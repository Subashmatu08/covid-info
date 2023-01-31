<template>
  <div style="height: 15vh"></div>
  <div class="container">
    <div class="title has-text-center">
      <p class="is-size-4 pt-3 has-text-black">Places Taking Covid Test</p>
    </div>

    <covid-test-comp
      class="covidcontent"
      v-for="(hospital, index) in covidData.hospital"
      :covidTitle="hospital['name']"
      :covidVerify="hospital['status']"
      :covidPhone="hospital['phone']"
      :covidPhonetwo="hospital['officerPhone']"
      :key="index"
    />
    <!--         :covidAddress="hospital['covid-address']"
        :covidRtpcr="hospital['covid-rtpcr']"
        :covidRapid="hospital['covid-rapid']" -->

    <!-- <pre> {{ covidData }}</pre> -->
  </div>
</template>

<script>
import CovidTestComp from '../components/CovidTestComp.vue';
import covidData from '../store/diyStore.js';

export default {
  components: {
    CovidTestComp,
  },
  setup() {
    return {
      covidData,
    };
  },
};
</script>

<style lang="scss">
.covidcontent {
  text-transform: uppercase;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
