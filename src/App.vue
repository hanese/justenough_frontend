<script setup>
import HeaderWithNavbar from "@/components/HeaderWithNavbar.vue";

</script>

<template>
<div class="custom-flex">
    <header>
        <HeaderWithNavbar/>
        <router-view/>

    </header>

  <main>

  </main>

  <footer>

  </footer>
</div>
</template>

<style scoped>
header {
  line-height: 4;
}
.custom-flex:hover {
  background-color: transparent;
  /* Weitere Stile, die du anpassen möchtest */
}
</style>
