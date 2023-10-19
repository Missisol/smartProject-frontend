<script setup>
const props = defineProps({
  lastData: {
    type: Object,
    default: () => {},
  },
  timer: {
    type: Number,
    default: 1000,
  }
})

const temperatureGaugeEl = ref(null)
const humidityGaugeEl = ref(null)
const pressureGaugeEl = ref(null)
const gaugeEls = ref(null)

function getUpdatedGaugePlotly() {
  useUpdateGauge(props.lastData, gaugeEls)

  setTimeout(() => {
    useUpdateGauge(props.lastData, gaugeEls)

    getUpdatedGaugePlotly()
  }, props.timer)
}

onMounted(() => {
  gaugeEls.value = [temperatureGaugeEl.value, humidityGaugeEl.value, pressureGaugeEl.value] 
  useGetGauge(gaugeEls)
  setTimeout(() => {
    getUpdatedGaugePlotly()
  }, 500)
})
</script>

<template>
  <div class="wrapper gauge-wrapper">
    <div class="gauge__box">
      <div id="temperature-gauge" ref="temperatureGaugeEl"></div>
    </div>
    <div class="gauge__box">
      <div id="humidity-gauge" ref="humidityGaugeEl"></div>
    </div>
    <div class="gauge__box">
      <div id="pressure-gauge" ref="pressureGaugeEl"></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>