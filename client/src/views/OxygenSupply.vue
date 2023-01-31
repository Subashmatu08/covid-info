<template>
  <div style="height: 15vh"></div>
  <div class="container">
    <div class="title has-text-center">
      <p class="is-size-4 pt-3 has-text-black">Places having Oxygen Supply</p>
    </div>

    <oxygen-supply-comp
      class="covidcontent"
      v-for="(hospital, index) in covidData.hospital"
      :oxygenTitle="hospital['name']"
      :oxygenVerify="hospital['status']"
      :oxygenPhone="hospital['phone']"
      :oxygenPhonetwo="hospital['officerPhone']"
      :oxygenBeds="hospital['02-beds'][2]"
      :key="index"
    />
  </div>
</template>

<script>
import OxygenSupplyComp from '../components/OxygenSupplyComp.vue';
import covidData from '../store/diyStore';

export default {
  components: {
    OxygenSupplyComp,
  },
  setup() {
    return {
      covidData,
    };
  },
};
</script>

<style></style>
