<template>
  <div class="covidcard">
    <div class="columns">
      <div class="column">
        <div class="covidtop">
          <h5 class="is-size-4 has-text-weight-semibold text-uppercase">
            {{ hospitalTitle }}
          </h5>
          <p class="is-size-6 has-text-success pr-4">{{ hospitalVerify }}</p>
        </div>
      </div>
    </div>
    <div class="columns">
      <h4 class="is-size-6 column">
        <!-- {{ covidAddress }}<br /> -->
        Ph.No : <a :href="`tel:+91${hospitalPhone}`">{{ hospitalPhone }}</a
        ><br />
        Officer Ph.No :
        <a :href="`tel:+91${hospitalPhonetwo}`">{{ hospitalPhonetwo }}</a>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "hospitalTitle",
    "hospitalVerify",
    "hospitalAddress",
    "hospitalPhone",
    "hospitalPhonetwo",
  ],
};
</script>

<style lang="scss" scoped></style>
