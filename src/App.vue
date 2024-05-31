<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UnauthenticatedLayout from './layout/UnauthenticatedLayout.vue'
import { ref } from 'vue';

const authenticated = ref(true);

</script>

<template>
  <div v-if="authenticated">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div>
        <nav>
          <RouterLink to="/">Menu</RouterLink> 
          <!-- menu de cadastro de clientes ou produtos e visualizar clientes ou produtos -->
          <RouterLink to="/products">Produtos</RouterLink>
          <RouterLink to="/clientes">Clientes</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>

  <UnauthenticatedLayout v-else>
    <RouterView />
  </UnauthenticatedLayout>
</template>

<style scoped>
</style>
