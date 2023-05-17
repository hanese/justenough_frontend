<script setup>

import {ref} from "vue"

let input = ref("")
let ingredients

//get all Ingredients
fetch('http://localhost:8000/api/ingredients/getAll').then(response => response.json()).then(data => {
  ingredients = data.map(item => item.ingredient);

}).catch(error => console.error(error));


const add = ["Zutat erstellen"]

function filteredList() {
  if (this.input.length === 0) {
    return 0
  } else if (ingredients.filter((ingredient) => ingredient.toLowerCase().includes(input.value.toLowerCase())).length === 0) {
    return add
  } else {
    return ingredients.filter((ingredient) => ingredient.toLowerCase().includes(input.value.toLowerCase()))
  }
}



function addIngredient(ingredient) {

  if (ingredient === "Zutat erstellen") {
    console.log("Zutat erstellen")
  }
  // add to storage
  else {
    const data = {
      ingredient: ingredient
    }
    const token = getTokenFromCookie()
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)


    };
    fetch('http://localhost:8000/api/storage/postStorageItem', options)
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


function addIngredientToShoppingList(ingredient){
  const data = {
    ingredient: ingredient
  }
  const token = getTokenFromCookie()
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)

  };
  fetch('http://localhost:8000/api/shopping/postShoppingItem', options)
}

</script>



<template>
  <div class="SearchFilterAdd">

    <div class="input-group">

      <!-- Suchefeld Input -->
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
      <!--gesuchte Zutaten anzeigen-->
      <ul style="list-style-type: none; display: block;">
        <li class="testSearch" v-for="ingredient in filteredList()" :key="ingredient">

          <span style="display: inline">{{ ingredient }}

            <div class="hidden-button">
                 <!--Button: Vorratskammer hinzufügen-->
              <button class="btn btn-outline-secondary"  type="button" @click="addIngredient(ingredient)">
                <span class="material-symbols-outlined" style="padding-top: 6px">add</span>
              </button>

              <!--Button: Einkaufsliste hinzufügen-->
             <button class="btn btn-outline-secondary" type="button" @click="addIngredientToShoppingList(ingredient)">
             <span class="material-symbols-outlined" style="padding-top: 6px">add_shopping_cart</span>
             </button>
            </div>


          </span>
        </li>
      </ul>
    </div>

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

.input-group{
  padding: 50px;
  padding-left: 100px;
  padding-right: 100px;
}
</style>