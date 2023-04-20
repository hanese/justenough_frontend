<script setup>
import Rezepte from './Rezepte.vue';


</script>

<template>
  <h1>Content</h1>
  <router-link :to="{ name: 'Login'}">Login</router-link>
  <Rezepte/>
</template>

<style scoped>

</style>