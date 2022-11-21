<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <h1>Hello</h1>
    
  </div>

  <RouterView />
</template>

<style scoped>
h1 {
  color: var(--my-dn-title-text);
}

p {
  color: var(--my-dn-content-text);
  font-weight: bold;
}
</style>
