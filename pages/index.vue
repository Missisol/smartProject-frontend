<script setup>
const url = bmeData
const timer = 60 * 1000
const results = ref(null)
const lastData = ref(null)

const { data, error } = await useCustomFetch(url)
results.value = data.value.results
lastData.value = data.value.results[0]

function getPeriodicData() {
  setTimeout(async() => {
    const { data, error } = await useCustomFetch(url)
    results.value = data.value.results
    lastData.value = data.value.results[0]

    getPeriodicData()
  }, timer)
}

getPeriodicData()
</script>

<template>
  <div>
    <CommonPageTitle>Данные BME280</CommonPageTitle>
    <BmeDataComponent :lastData="lastData" :timer="timer" />
    <BmeChartsComponent :results="results" />
  </div>
</template>

<style lang='scss' scoped></style>