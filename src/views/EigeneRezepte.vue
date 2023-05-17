<template>
  <router-link to="Rezepte"><h1 class="nichtaktuelleSeite">Recipes</h1></router-link>
  <router-link to="WhatCanICook"><h1 class="nichtaktuelleSeite">What Can I Cook?</h1></router-link>
  <h1 class="aktuelleSeite">Own Recipes</h1>
</template>

<script setup>

</script>

<style scoped>
.aktuelleSeite {
  transition: all 0.2s ease-in-out;
  margin-top: 50px;
  color: black;
  background-color: rgba(169, 114, 114, 0.34); /* Hintergrundfarbe */
  display: inline-block; /* Um den Rahmen um den Text zu setzen */
  padding: 5px; /* Abstand innerhalb des Rahmens */
  margin-right: 10px; /* Abstand zwischen "Ingredients" und "Storage" */
  border: none;
  border-radius: 20px;
}



.nichtaktuelleSeite{
  transition: all 0.2s ease-in-out;
  margin-top: 50px;
  color: black;
}

.nichtaktuelleSeite:hover{
  color: #a97272;
  transform: scale(1.1);
  cursor: pointer;
}
</style>