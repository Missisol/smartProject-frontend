<script setup>
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink to="/">BME data</NuxtLink>
      <NuxtLink to="/dht22">DHT22 data</NuxtLink>
    </nav>
  </header>
</template>


<style lang='scss' scoped>
.header {
  display: flex;

  &__nav {
    display: flex;
    gap: var(--gap);
    margin-left: auto;
    padding: var(--gap) 0;
  }
}
</style>
