<script setup>
import HeaderWithNavbar from "@/components/HeaderWithNavbar.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <header>
    <HeaderWithNavbar/>

    <router-view/>

  </header>

  <main>

  </main>

  <footer>

  </footer>

</template>

<style scoped>
header {
  line-height: 4;
}
</style>
