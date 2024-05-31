<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UnauthenticatedLayout from './layout/UnauthenticatedLayout.vue'
import { ref } from 'vue';

const authenticated = ref(true);

</script>

<template>
  <div v-if="authenticated">
    <header>
      
    </header>
    <RouterView />
  </div>

  <UnauthenticatedLayout v-else>
    <RouterView />
  </UnauthenticatedLayout>
</template>

<style scoped>
</style>
