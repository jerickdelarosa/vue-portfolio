<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view name="navigation" />
  <div class="container px-2 py-4">
    <router-view />
  </div>
</template>

<style scoped>

</style>
