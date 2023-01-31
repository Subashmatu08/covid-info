<template>
  <div style="height: 15vh"></div>
  <div
    class="errorMessage has-text-centered has-text-white has-background-danger"
    v-show="errorMessage"
  >
    {{ errorMessage }}
  </div>
  <div class="container">
    <div class="title has-text-center">
      <p class="is-size-4 pt-3 has-text-black">Places Taking Blood Test</p>
    </div>
    <loader v-if="isLoading" />
    <div class="covidcontent" v-else>
      <doctors-comp
        v-for="(hospital, index) in covidHospitals.filter(
          (item) => item['doctor-title']
        )"
        :doctorTitle="hospital['doctor-title']"
        :doctorVerify="hospital['doctor-verify']"
        :doctorPhone="hospital['doctor-phone']"
        :doctorAddress="hospital['doctor-address']"
        :doctorRtpcr="hospital['doctor-rtpcr']"
        :doctorRapid="hospital['doctor-rapid']"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import DoctorsComp from '../components/DoctorsComp.vue';
import Loader from '../components/loader.vue';
export default {
  components: {
    DoctorsComp,
    Loader,
  },
  setup() {
    const errorMessage = ref('');
    const isLoading = ref(true);
    const covidHospitals = ref([]);
    async function getData() {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Subashmatu08/covid-info/main/public/data.json'
        );
        const data = await response.json();
        console.log(data);
        covidHospitals.value = data;
        await new Promise((resolve) => setTimeout(resolve, 500));
        isLoading.value = false;
      } catch (error) {
        console.log(error);
        errorMessage.value = error.message || 'failed to fetch';
      }
    }
    onMounted(() => {
      getData();
    });
    return {
      covidHospitals,
      errorMessage,
      isLoading,
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
