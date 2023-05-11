<script setup>
// get komplettes Rezept
async function showWholeRecipe(id) {
  const halfUrl = 'http://localhost:8000/api/recipes/getRecipe/';
  let fullUrl = halfUrl + id.toString();
  try {
    const response = await fetch(fullUrl);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
}

const props = defineProps(['wholeMeal']);
</script>

<template>
  <h1>Aktuelles Rezept</h1>
  <div>
    <p>Id ist: {{ wholeMeal }}</p>
  </div>
</template>

<style scoped>
</style>
