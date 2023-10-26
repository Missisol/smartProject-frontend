<script setup>
const timer = 60 * 1000

const { res, err } = await useGetPeriodicData(bmeHistoryUrl, timer)
</script>

<template>
  <div>
    <CommonPageTitle>История BME280</CommonPageTitle>
    <BmeChartsComponent :results="res" :func="useGetHistoryLineChart"/>
  </div>
</template>

<style lang='scss' scoped></style>