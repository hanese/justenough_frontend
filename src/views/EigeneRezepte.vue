<script setup>
import { ref } from "vue"

let input = ref("")

//get all recipes
let meals = ref([])
let ids = ref([])
let recipes = ref({})
async function fetchAllMeals() {
  try {
    const token = getTokenFromCookie();
    const response = await fetch('http://localhost:8000/api/recipes/getCustomRecipes', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    recipes = await response.json()
    meals = recipes.map((mealData) => mealData.meal)
    ids = recipes.map((mealData) => mealData.uuid)
    debugger
  } catch (error) {
    console.error(error)
  }
}
// get all custom Recipes
fetchAllMeals()

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


//function um ganzes Rezept in neuer Seite anzuzeigen
function newPage(wholeMeal){
  return {
    name: 'AktuellesRezept',
    query: { id: wholeMeal }
  };
}
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
        <router-link to="WhatCanICook">
          <h1 class="nichtaktuelleSeite">What Can I Cook?</h1>
        </router-link>
      </div>
      <div class="col text-center">
        <h1 class="aktuelleSeite">Own Recipes</h1>
      </div>
    </div>

    <ul style="list-style-type: none; display: block;">
      <li class="testSearch" v-for="meal in meals" :key="meal" >
        <router-link :to="newPage(meal.id)"><span style="display: inline">{{ meal.meal }}</span></router-link>
      </li>
    </ul>


  </div>

</template>



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