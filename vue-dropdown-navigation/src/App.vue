<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'

</script>

<template>
  <div>
   <nav class="nav">
    <Navbar />
   </nav>
    
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
