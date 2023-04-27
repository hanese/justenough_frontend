<script setup>

import {ref} from "vue"

let input = ref("")
const ingredients = ["Salz", "Nudeln", "Käse", "Kartoffel"]
const add = ["Zutat hinzufügen"]

function filteredList() {
  if (this.input.length === 0) {
    return 0
  } else if (ingredients.filter((ingredient) => ingredient.toLowerCase().startsWith(input.value.toLowerCase())).length === 0) {
    return add
  } else {
    return ingredients.filter((ingredient) => ingredient.toLowerCase().startsWith(input.value.toLowerCase()))
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
      <ul>
        <li class="testSearch" v-for="ingredient in filteredList()" :key="ingredient">{{ ingredient }}</li>
      </ul>
    </div>

  </div>


</template>


<style scoped>
.SearchFilterAdd {

}

.input-group {
}
</style>