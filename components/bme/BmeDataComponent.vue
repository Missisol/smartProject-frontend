<script setup>
const url = bmeData
const timer = 60 * 1000
// const timer = 60 * 1000 * 15
const isSimple = ref(true)
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

function togglePanel() {
  isSimple.value = !isSimple.value
}
</script>

<template>
  <section class="section gauge">
    <div class="gauge__header">
      <div class="gauge__title-wrapper">
        <h2 class="title">Данные на&nbsp;
            {{ lastData.bme_date }}
        </h2>
        <span id="local-date" class="title title--date"></span>
      </div>
      <div id="icon-wrapper" @click="togglePanel">
        <i class="bx bx-grid-alt gauge__icon" v-if="isSimple"></i>
        <i class="bx bx-list-ul gauge__icon" v-if="!isSimple"></i>
      </div>
    </div>
    <BmeDataSimpleComponent 
      v-if="isSimple"
      :lastData="lastData"
      :isSimple="isSimple"
    />
    <BmeDataGaugeComponent 
      v-else
      :lastData="lastData"
      :timer="timer"
    />
  </section>
</template>

<style lang="scss" scoped>
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
</style>
