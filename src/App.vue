<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import UnauthenticatedLayout from './layout/UnauthenticatedLayout.vue'
import { ref } from 'vue';

const authenticated = ref(false);

</script>

<template>
  <header v-if="authenticated">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/clientes">Clientes</RouterLink>
      </nav>
    </div>
  </header>

  <UnauthenticatedLayout>
    <RouterView />
  </UnauthenticatedLayout>
</template>

<style scoped>
</style>
