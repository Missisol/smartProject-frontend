<script setup>
const currentYear = ref(new Date().getFullYear())

</script>

<template>
  <footer class="footer">
    <span>&copy; {{ currentYear }}</span>
  </footer>
</template>

<style lang='scss' scoped>
.footer {
  display: flex;
  align-items: center;
  padding: var(--gap) 0;
}
</style>
