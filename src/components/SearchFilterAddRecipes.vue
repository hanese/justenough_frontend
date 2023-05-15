<script setup>
import {ref} from "vue"

let input = ref("")

//get all recipes
let meals = ref([])
let ids = ref([])
let recipes = ref({})

async function fetchData() {
  try {
    const response = await fetch('http://localhost:8000/api/recipes/getAll')
    recipes = await response.json()

    meals = recipes.map((mealData) => mealData.meal)
    ids = recipes.map((mealData) => mealData.id)
  } catch (error) {
    console.error(error)
  }
}

fetchData()

const add = ["Rezept erstellen"]

function filteredList() {
  if (this.input.length === 0) {
    return 0
  } else if (meals.filter((meal) => meal.toLowerCase().includes(input.value.toLowerCase())).length === 0) {
    return add
  } else {
    let filteredRecipes = []
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].meal.toLowerCase().includes(input.value.toLowerCase())) {
        filteredRecipes.push(recipes[i])
      }
    }
    return filteredRecipes
  }
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
        <li class="testSearch" v-for="meal in filteredList()" :key="meal" >

          <router-link :to="newPage(meal.id)"><span style="display: inline">{{ meal.meal }}</span></router-link>
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