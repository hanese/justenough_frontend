<script setup>
import HeaderWithNavbar from "@/components/HeaderWithNavbar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>

  <header>
    <HeaderWithNavbar/>
    <router-view/>
    <HelloWorld/>
  </header>

  <main>

  </main>

</template>

<style scoped>
header {
  line-height: 4;
}
</style>
