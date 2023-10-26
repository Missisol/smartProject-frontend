<script setup>
const props = defineProps({
  lastData: Object
})

const plotlyArr = ref(null)

plotlyArr.value = useGetGauge(props.lastData)

watchEffect(() => {
  plotlyArr.value = useGetGauge(props.lastData)
})
</script>

<template>
  <div class="wrapper gauge-wrapper">
    <ClientOnly>
      <nuxt-plotly
      v-for="plotlyData in toValue(plotlyArr)"
        :key="plotlyData.trace.title"
        :data="plotlyData.trace"
        :layout="gaugeLayout"
        :config="plotlyConfig"
      ></nuxt-plotly>
    </ClientOnly>
  </div>
</template>

<style lang='scss' scoped>
</style>