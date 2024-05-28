<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

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
</template>

<style scoped>
</style>
