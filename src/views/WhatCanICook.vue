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
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <router-link to="Rezepte">
          <h1 class="nichtaktuelleSeite">Recipes</h1>
        </router-link>
      </div>
      <div class="col text-center">
        <h1 class="aktuelleSeite">What Can I Cook?</h1>
      </div>
      <div class="col text-center">
        <router-link to="EigeneRezepte">
          <h1 class="nichtaktuelleSeite">Own Recipes</h1>
        </router-link>
      </div>
    </div>
  </div>

  <h1 v-if="isLoading">Loading...</h1>
  <h4 v-else style="padding-top: 30px; display: flex; justify-content: center;">You can cook the following recipes:</h4>
  <ul v-if="!isLoading">


    <li v-for="recipe in recipes" :key="recipe.id" style="display: flex; justify-content: center;">
      <router-link :to="newPage(recipe.id)" style="color: #181818">
        <span>{{ recipe.meal }}</span>
      </router-link>
    </li>

  </ul>

</template>

<style scoped>
li {
  align-items: center;
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

.ingredient-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.ingredient-name {
  margin-right: 10px;
}

.hidden-button {
  display: none;
}

li:hover .hidden-button {
  display: inline-block;
}

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