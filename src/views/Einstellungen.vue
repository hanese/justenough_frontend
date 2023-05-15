<script setup>
import FooterPers from "@/components/FooterPers.vue";
</script>

<template>
  <div>
    <h1 class="WillkommenH2">Einstellungen</h1>
  </div>

  <FooterPers/>
</template>

<style>
.WillkommenH2 {
  text-align: center;
  transition: all 0.2s ease-in-out;
  margin-top: 50px;
}

.WillkommenH2:hover{
  transform: scale(1.1);
  cursor: pointer;
}
</style>
