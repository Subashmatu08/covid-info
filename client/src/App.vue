<script setup>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import GoTop from './components/GoTop.vue';
import BottomNav from './components/BottomNav.vue';
import Loader from './components/loader.vue';
import { onMounted, ref } from 'vue';
import covidData from './store/diyStore';

const isLoading = ref(true);
const errorMessage = ref('');
async function getData() {
  try {
    const response = await fetch(import.meta.env.VITE_SERVER_URL);
    const data = await response.json();
    console.log(data);
    covidData.value = data;
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
</script>

<template>
  <nav-bar />
  <loader v-if="isLoading" />
  <div v-else>
    <main>
      <router-view />
    </main>

    <Footer />
    <bottom-nav />
    <go-top />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Azonix';
  src: local('Azonix'), url(./fonts/Azonix.otf) format('truetype');
}

main {
  min-height: 100vh;
}
@media screen and (max-width: 1024px) {
  main {
    padding-bottom: 10vh;
  }
}
</style>
