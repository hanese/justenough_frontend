<script setup>
import HeaderWithNavbar from "@/components/HeaderWithNavbar.vue";

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
