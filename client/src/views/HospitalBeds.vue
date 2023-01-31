<template>
  <div style="height: 15vh"></div>
  <div class="container">
    <div class="title has-text-center">
      <p class="is-size-4 pt-3 has-text-black">
        Hospital With Beds For Covid Patients
      </p>
    </div>

    <hospital-beds-comp
      class="covidcontent"
      v-for="(hospital, index) in covidData.hospital"
      :hospitalBedsTitle="hospital['name']"
      :hospitalBedsVerify="hospital['status']"
      :hospitalBedsPhone="hospital['phone']"
      :hospitalBedsPhonetwo="hospital['officerPhone']"
      :hospitalBedsIcu="hospital['icu-beds'][2]"
      :hospitalBedsVent="hospital['ventilator'][2]"
      :hospitalBedsGen="hospital['general-beds'][2]"
      :key="index"
    />
  </div>
</template>

<script>
import HospitalBedsComp from "../components/HospitalBedsComp.vue";
import covidData from "../store/diyStore";

export default {
  components: {
    HospitalBedsComp,
  },
  setup() {
    return {
      covidData,
    };
  },
};
</script>

<style></style>
