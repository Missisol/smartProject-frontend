<script setup>
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink class="header__link" to="/">Данные BME280</NuxtLink>
      <NuxtLink class="header__link" to="/bmeHistory">История BME280</NuxtLink>
      <NuxtLink class="header__link" to="/dhtData">Данные DHT22</NuxtLink>
      <NuxtLink class="header__link" to="/dhtHistory">История DHT22</NuxtLink>
    </nav>
  </header>
</template>


<style lang='scss' scoped>
.header {
  display: flex;

  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--gap) * 2);
    margin-left: auto;
    padding: var(--gap) 0;
  }

  &__link {
    text-decoration: none;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
  }
}
</style>

<style>
.router-link-active {
  color: var(--blue);
}

.header__link:not(.router-link-active) {
  color: var(--darkgrey);
}

</style>
