<script setup>
import { ref, onMounted } from 'vue';

let ingredients = ref([]);

// Get all shopping cart ingredients
onMounted(() => {
  fetch('http://localhost:8000/api/shopping/getShoppingItems')
      .then(response => response.json())
      .then(data => {
        ingredients.value = data.map(item => item.ingredient);
      })
      .catch(error => console.error(error));
});
</script>

<template>
  <div>
    <h1>Test</h1>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
    </ul>
  </div>
</template>



<style scoped>
li {
  display: flex; /* Container für Ingredient und Buttons */
  justify-content: space-between; /* Platzieren Sie die Buttons rechts */
  align-items: center; /* Zentrieren Sie Ingredient und Buttons vertikal */
  font-size: 15px;
  margin-bottom: 10px;
}

li:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(169, 114, 114, 0.15);
  z-index: -1;
}


li .hidden-button {
  display: none; /* Button standardmäßig ausblenden */
}

li:hover .hidden-button {
  display: inline-block; /* Button beim Überfahren des Listenpunkts einblenden */
}


</style>