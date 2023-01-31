<template>
  <div style="height: 15vh"></div>
  <div class="container">
    <div class="title has-text-center">
      <p class="is-size-4 pt-3 has-text-black">
        Hospitals Treating Covid Patients
      </p>
    </div>

    <hospital-comp
      class="covidcontent"
      v-for="(hospital, index) in covidData.hospital"
      :hospitalTitle="hospital['name']"
      :hospitalVerify="hospital['status']"
      :hospitalPhone="hospital['phone']"
      :hospitalPhonetwo="hospital['officerPhone']"
      :key="index"
    />
  </div>
</template>

<script>
import HospitalComp from "../components/HospitalComp.vue";
import covidData from "../store/diyStore";

export default {
  components: {
    HospitalComp,
  },
  setup() {
    return {
      covidData,
    };
  },
};
</script>

<style></style>
