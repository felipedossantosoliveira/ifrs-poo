<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import UnauthenticatedLayout from './layout/UnauthenticatedLayout.vue'
import AuthenticatedLayout from './layout/AuthenticatedLayout.vue'
import { ref } from 'vue';

const authenticated = ref(true);

</script>

<template>

  <AuthenticatedLayout v-if="authenticated">
      <RouterView/>
  </AuthenticatedLayout>

  <UnauthenticatedLayout v-else>
    <RouterView />
  </UnauthenticatedLayout>
</template>

<style scoped>
</style>
