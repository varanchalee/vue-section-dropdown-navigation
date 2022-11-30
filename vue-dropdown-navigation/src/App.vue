<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/NavBar.vue";
import MainContentVue from "@/components/MainContent.vue";
</script>

<template>
  <div>
    <Navbar />

    <section>
      <MainContentVue />
    </section>

    <RouterView />

  </div>
</template>

<style scoped>

/* h1 {
  color: var(--my-dn-title-text);
}

p {
  color: var(--my-dn-content-text);
  font-weight: bold;
} */
</style>
