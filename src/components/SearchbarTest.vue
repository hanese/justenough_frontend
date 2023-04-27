<script setup>

import {ref} from "vue"
let input = ref("")
const ingridients = ["Salz", "Nudeln", "Käse", "Kartoffel"]
function filteredList(){
  if (this.input.length===0){
    return 0

  }
  else {
    return ingridients.filter((ingridient) => ingridient.toLowerCase().includes(input.value.toLowerCase()))
  }
}


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
        <li class="testSearch" v-for="ingridient in filteredList()" :key="ingridient">{{ingridient}}</li>
      </ul>
    </div>

  </div>


</template>


<style scoped>
.SearchFilterAdd {

}
.input-group{}
</style>