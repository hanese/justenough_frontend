<script setup>

import {ref} from "vue"

let input = ref("")
let ingredients


fetch('http://localhost:8000/api/ingredients/getAll').then(response => response.json()).then(data => {
  ingredients = data.map(item => item.ingredient);

}).catch(error => console.error(error));


const add = ["Zutat erstellen"]

function filteredList() {
  if (this.input.length === 0) {
    return 0
  } else if (ingredients.filter((ingredient) => ingredient.toLowerCase().startsWith(input.value.toLowerCase())).length === 0) {
    return add
  } else {
    return ingredients.filter((ingredient) => ingredient.toLowerCase().startsWith(input.value.toLowerCase()))
  }
}


function addIngredient(ingredient) {

  if (ingredient === "Zutat erstellen") {
    console.log("Zutat erstellen")
  } else {
    console.log("Zutat")
  }
}

//http://localhost:8000/api/allIngredients
</script>

<template>
  <div class="SearchFilterAdd">
    <div class="input-group">

      <input type="text" class="form-control" placeholder="Suche"
             aria-label="Recipient's username with two button addons" v-model="input">

      <button class="btn btn-outline-secondary" type="button"><span class="material-symbols-outlined"
                                                                    style="padding-top: 10px">
    search
    </span></button>
      <button class="btn btn-outline-secondary" type="button"><span class="material-symbols-outlined"
                                                                    style="padding-top: 10px">
    add
    </span></button>

      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Filter
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Test</a></li>
        <li><a class="dropdown-item" href="#">Test</a></li>
      </ul>


    </div>
    <div>
      <ul style="list-style-type: none; display: block;">
        <li class="testSearch" v-for="ingredient in filteredList()" :key="ingredient"
            @click="addIngredient(ingredient)">
          <span style="display: inline">{{ ingredient }}
           <button class="btn btn-outline-secondary"  type="button" @click="console.log('Button 1 clicked')">
           <span class="material-symbols-outlined" style="padding-top: 6px">add</span>
           </button>

           <button class="btn btn-outline-secondary" type="button" @click="console.log('Button 1 clicked')">
           <span class="material-symbols-outlined" style="padding-top: 6px">add_shopping_cart</span>
           </button>

          </span>
        </li>
      </ul>
    </div>

  </div>


</template>


<style scoped>
li {
  display: block;
  font-size: 15px;
  margin-bottom: 10px; /* added margin-bottom for spacing */
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


</style>