<script setup lang="ts">
const props = defineProps<{
  lastData: DataItem
  timer: number
}>()

const isSimple = ref(true)
const date = ref(new Date(props.lastData.full_date))

function togglePanel() {
  isSimple.value = !isSimple.value
}
</script>

<template>
  <section class="section gauge">
    <div class="gauge__header">
      <div class="gauge__title-wrapper">
        <h2 class="title">Данные на&nbsp;
            {{ date.toLocaleString() }}
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
