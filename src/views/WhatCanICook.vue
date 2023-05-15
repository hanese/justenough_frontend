<script setup>
import {ref, onMounted} from 'vue';

let recipes = ref([]);
let isLoading = ref(true);

function getTokenFromCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('access_token=')) {
      return cookie.substring('access_token='.length, cookie.length);
    }
  }
  return null;
}

function newPage(wholeMeal) {

  return {
    name: 'AktuellesRezept',
    query: {id: wholeMeal}
  };
}

async function getRecipesByStorageIngredients() {
  const token = getTokenFromCookie()
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };
  const storageResponse = await fetch('http://localhost:8000/api/storage/getStorage', options)
  const storage = await storageResponse.json()
  const ingredients = storage.map(ingredient => ingredient.item)
  const url = new URL('http://localhost:8000/api/recipes/getRecipesByIngredients');
  ingredients.forEach(ingredient => {
    url.searchParams.append('ingredients', ingredient);
  });
  const recipesResponse = await fetch(url, options);
  const recipesData = await recipesResponse.json();
  recipes = recipesData;
}

onMounted(async () => {
  await getRecipesByStorageIngredients();
  isLoading.value = false;
});
</script>


<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else>You can cook the following recipes:</h1>
  <ul v-if="!isLoading">


    <li v-for="recipe in recipes" :key="recipe.id">
      <router-link :to="newPage(recipe.id)">
        <span>{{ recipe.meal }}</span>
      </router-link>
    </li>

  </ul>

</template>

<style scoped>

</style>