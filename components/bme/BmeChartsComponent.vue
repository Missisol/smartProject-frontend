<script setup>
const props = defineProps({
  results:  Array,
  func: Function,
})

const plotlyArr = ref(null)

plotlyArr.value = props.func(props.results)

watchEffect(() => {
  plotlyArr.value = props.func(props.results)
})
</script>

<template>
  <section class="section">
    <client-only>
      <nuxt-plotly
        v-for="plotlyData in toValue(plotlyArr)"
        :key="plotlyData.layout.title"
        :data="plotlyData.trace"
        :layout="plotlyData.layout"
        :config="plotlyConfig"
        style="width: 100%"
      ></nuxt-plotly>
    </client-only>

  </section>
</template>

<style scoped>
/* Grid settings */
.container {
  display: grid;
  grid-template-columns: 
   1fr [container-start] minmax(0, 1200px) [container-end] 1fr;
   gap: var(--gap);
   padding-top: calc(var(--gap) * 2);
   padding-bottom: calc(var(--gap) * 2);
}

.container > * {
  grid-column: container;
}

.title {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
}


/* Header style */
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.header__title {
  color: var(--blue);
}

/* Section style */
.section {
  padding-top: var(--gap);
  padding-bottom: var(--gap);
}

.section + .section {
  border-top: 1px solid var(--lightgrey);
}

.charts__title-wrapper {
  margin-bottom: var(--gap);
}

/* Gauge styles */
.gauge__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--gap);
}

.title--date {
  font-size: 22px;
}

#icon-wrapper {
  cursor: pointer;
}

.gauge__icon {
  font-size: 30px;
  color: var(--blue);
}


.gauge-wrapper,
.box-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.visible {
  display: flex;
}

.hidden {
  display: none;
}

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
