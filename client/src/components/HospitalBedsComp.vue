<template>
  <div class="covidcard">
    <div class="columns">
      <div class="column">
        <div class="covidtop">
          <h5 class="is-size-4 has-text-weight-semibold text-uppercase">
            {{ hospitalBedsTitle }}
          </h5>
          <p class="is-size-6 has-text-success pr-4">
            {{ hospitalBedsVerify }}
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <h4 class="is-size-6 column">
        <!-- {{ covidAddress }}<br /> -->
        Ph.No :
        <a :href="`tel:+91${hospitalBedsPhone}`">{{ hospitalBedsPhone }}</a
        ><br />
        Officer Ph.No :
        <a :href="`tel:+91${hospitalBedsPhonetwo}`">{{
          hospitalBedsPhonetwo
        }}</a>
      </h4>
    </div>
    <h4 class="is-size-6">
      Available General Beds:
      {{ hospitalBedsGen }}
    </h4>
    <h4 class="is-size-6">
      Available Icu Beds:
      {{ hospitalBedsIcu }}
    </h4>
    <h4 class="is-size-6">
      Available Ventilator Beds:
      {{ hospitalBedsVent }}
    </h4>
  </div>
</template>

<script>
export default {
  props: [
    "hospitalBedsTitle",
    "hospitalBedsVerify",
    "hospitalBedsAddress",
    "hospitalBedsPhone",
    "hospitalBedsPhonetwo",
    "hospitalBedsIcu",
    "hospitalBedsVent",
    "hospitalBedsGen",
  ],
};
</script>

<style lang="scss" scoped></style>
