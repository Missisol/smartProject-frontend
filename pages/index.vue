<script setup>
const timer = 60 * 1000

const { res, err } = await useGetPeriodicData(bmeDataUrl, timer)
</script>

<template>
  <div>
    <CommonPageTitle>Данные BME280</CommonPageTitle>
    <BmeDataComponent :lastData="res[0]" />
    <BmeChartsComponent :results="res" :func="useGetLineChart"/>
  </div>
</template>

<style lang='scss' scoped></style>