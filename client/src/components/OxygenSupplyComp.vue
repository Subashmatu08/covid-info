<template>
  <div class="oxygencard">
    <div class="columns">
      <div class="column">
        <div class="oxygentop">
          <h4 class="is-size-4 has-text-weight-semibold">
            {{ oxygenTitle }}
          </h4>
          <p class="is-size-6 has-text-success pr-4">{{ oxygenVerify }}</p>
        </div>
      </div>
    </div>
    <div class="columns">
      <h4 class="is-size-6 column">
        Ph.No : <a href="tel:{{oxygenPhone}}">{{ oxygenPhone }}</a
        ><br />
        Officer Ph.No :
        <a href="tel:{{oxygenPhonetwo}}">{{ oxygenPhonetwo }}</a>
      </h4>
    </div>
    <h4 class="is-size-6">
      Available Beds:
      {{ oxygenBeds }}
    </h4>
  </div>
</template>

<script>
export default {
  props: [
    'oxygenTitle',
    'oxygenVerify',
    'oxygenPhone',
    'oxygenPhonetwo',
    'oxygenBeds',
  ],
};
</script>
<style lang="scss">
.oxygencard {
  min-height: 25vh !important;
  border-radius: 5px;
  color: black;
  padding: 10px;
  box-shadow: 2px 2px 12px rgb(197, 196, 196);
  .oxygentop {
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: 1024px) {
  .container {
    margin: auto 30px;
  }
  .oxygencard {
    border-radius: 10px;
    min-height: 10vh !important;
  }
}
</style>
