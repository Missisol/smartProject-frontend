<script setup lang="ts">
const props = defineProps<{
  lastData: DataItem
  isSimple: boolean
}>()
</script>

<template>
  <div class="wrapper box-wrapper" v-show="isSimple">
    <div class="box">
      <i class="bx bxs-thermometer readings"></i>
      <div class="box__content">
        <div class="box__title">Температура, &deg;C</div>
        <div class="box__data" id="temperature">{{ lastData?.temperature }}</div>
      </div>
    </div>
    <div class="box">
      <i class="bx bxs-droplet-half readings readings--two"></i>
      <div class="box__content">
        <div class="box__title">Влажность, %</div>
        <div class="box__data" id="humidity">{{ lastData?.humidity }}</div>
      </div>
    </div>
    <div class="box">
      <i class="bx bxs-tachometer readings readings--three"></i>
      <div class="box__content">
        <div class="box__title">Давление, мм.рт.ст.</div>
        <div class="box__data" id="pressure">{{ lastData?.pressure }}</div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.box {
  flex-basis: 300px;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 20px;
}

.readings {
  font-size: 30px;
  color: var(--green);
}

.readings--two {
  color: var(--blue);
}

.readings--three {
  color: var(--grey);
}
</style>