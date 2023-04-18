<script setup>
import HeaderWithNavbar from "@/components/HeaderWithNavbar.vue";
import Content from "@/components/Content.vue";
</script>

<template>

  <header>
    <div >
      <HeaderWithNavbar/>
    </div>
  </header>

  <main>
    <Content/>
  </main>

</template>

<style scoped>
header {
  line-height: 4;
}
</style>
