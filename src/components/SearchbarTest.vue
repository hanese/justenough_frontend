<script setup>
import {ref} from "vue"

let input = ref("")

//get all recipes
async function getAllRecipes() {
  let response = await fetch('http://localhost:8000/api/recipes/getAll')
  debugger
  let data = await response.json()
  debugger
  return data
}


const add = ["Rezept erstellen"]

async function filteredList() {
  let recipes = await getAllRecipes()
  debugger
  let ids = recipes.map(recipes => recipes.id)
  let meals = recipes.map(recipes => recipes.meal)
  if (this.input.length === 0) {
    return 0
  } else if (meals.filter((meal) => meal.toLowerCase().startsWith(input.value.toLowerCase())).length === 0) {
    return add
  } else {
    return meals.filter((meal) => meal.toLowerCase().startsWith(input.value.toLowerCase()))
  }
}

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


function showWholeRecipe(){

return 0

}

</script>



<template>
  <div class="SearchFilterAdd">

    <div class="input-group">

      <!-- Suchfeld Input -->
      <input type="text" class="form-control" placeholder="Suche"
             aria-label="Recipient's username with two button addons" v-model="input">

      <!-- Suchfilter mit Dropdown -->
      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Filter
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Test</a></li>
        <li><a class="dropdown-item" href="#">Test</a></li>
      </ul>

    </div>

    <div class="container">
      <!--gesuchte Rezepte anzeigen-->
      <ul style="list-style-type: none; display: block;">
        <li class="testSearch" v-for="meal in filteredList()" :key="meal" @click="showWholeRecipe()">

          <span style="display: inline">{{ meal }}</span>
        </li>
      </ul>
    </div>

  </div>


</template>


<style scoped>
li {
  display: flex;
  justify-content: space-between;
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


li .hidden-button {
  display: none; /* Button standardmäßig ausblenden */
}

li:hover .hidden-button {
  display: inline-block; /* Button beim Überfahren des Listenpunkts einblenden */
}


</style>