<script setup lang="ts">
const props = defineProps<{
  lastData: DataItem
}>()

const isSimple = ref(true)
const date = ref<string|null>(null)

function togglePanel() {
  isSimple.value = !isSimple.value
}

watchEffect(() => {
  date.value = new Date(props.lastData.full_date).toLocaleString()
})
</script>

<template>
  <section class="section gauge">
    <div class="gauge__header">
      <h2 class="gauge__title">Данные на&nbsp;
          {{ date }}
      </h2>
      <div class="gauge__icon-wrapper" @click="togglePanel">
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
    />
  </section>
</template>

<style lang="scss" scoped>
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

.gauge-wrapper,
.box-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Gauge styles */
.gauge {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: var(--gap);
  }

  &__title {
    color: var(--darkgrey);
    font-weight: 400;
  }

  &__icon-wrapper {
    cursor: pointer;
  }

  &__icon {
    font-size: 30px;
    color: var(--blue);
  }
}

.visible {
  display: flex;
}

.hidden {
  display: none;
}
</style>
