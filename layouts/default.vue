<script setup>
</script>

<template>
  <div class="container">
    <AppHeader />
      <slot />
    <AppFooter />
  </div>
</template>

<style lang='scss'>
/* Grid settings */
.container {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 
    1fr [container-start] minmax(0, 1200px) [container-end] 1fr;
    gap: var(--gap);
  grid-template-rows: auto 1fr auto;
}

.container > * {
  grid-column: container;
}

.title {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
}
</style>