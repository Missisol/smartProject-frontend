<script setup>
const url = bmeData
const timer = 60 * 1000
// const timer = 60 * 1000 * 15
const isSimple = ref(true)
const results = ref(null)

const { data, error } = await useCustomFetch(url)
results.value = data.value.results

function getPeriodicData() {
  setTimeout(async () => {
    const { data, error } = await useCustomFetch(url)
    results.value = data.value.results

    getPeriodicData()
  }, timer)
}

getPeriodicData()
</script>

<template>
  <section class="section">
    <ul>
      <li v-for="item in results"> 
        <span>{{ item.id }}</span>&nbsp;&nbsp;:
        <span>{{ item.bme_date }}</span>&nbsp;:
        <span>temperature: {{ item.bme_temperature }}</span>&nbsp;
        <span>humidity: {{ item.bme_humidity }}</span>&nbsp;
        <span>pressure: {{ item.bme_pressure }}</span> 
      </li>
    </ul>
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
