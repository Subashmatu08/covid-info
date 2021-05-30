<template>
  <div style="height: 15vh"></div>
  <div class="container">
    <div class="title has-text-center">
      <p class="is-size-4 pt-3 has-text-black">Places having Oxygen Supply</p>
    </div>
    <div class="oxygencontent">
      <oxygen-supply-comp
        oxygen-title="BlaBla"
        oxygen-verified="verified"
        oxygen-phone="45454545"
        oxygen-address="128-32, Srinagar, india"
      />
      <oxygen-supply-comp
        oxygen-title="hello"
        oxygen-verified="verified"
        oxygen-phone="9940139134"
        oxygen-address="128-32, Srinagar, india"
      />
      <oxygen-supply-comp
        oxygen-title="okay"
        oxygen-verified="verified"
        oxygen-phone="9940139134"
        oxygen-address="128-32, Srinagar, india"
      />
      <oxygen-supply-comp
        oxygen-title="byee"
        oxygen-verified="verified"
        oxygen-phone="9940139134"
        oxygen-address="128-32, Srinagar, india"
      />
      <oxygen-supply-comp
        oxygen-title="you again"
        oxygen-verified="verified"
        oxygen-phone="9940139134"
        oxygen-address="lorem32klsgjdflglsj d;gljs;lg sgkjslkdg ;slkjg;lsg;lkjsl lskjg;lsj"
      />
      <oxygen-supply-comp
        oxygen-title="get out"
        oxygen-verified="verified"
        oxygen-phone="9940139134"
        oxygen-address="128-32, Srinagar, india"
      />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import OxygenSupplyComp from "../components/OxygenSupplyComp";
export default {
  components: {
    OxygenSupplyComp,
  },
  setup() {
    onMounted(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    });
  },
};
</script>

<style>
.oxygencontent {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}
</style>
