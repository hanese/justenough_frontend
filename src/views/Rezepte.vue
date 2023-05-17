<script setup>
import SearchFilterAdd from "@/components/SearchFilterAddRecipes.vue";
import SearchFilterAddRecipes from "@/components/SearchFilterAddRecipes.vue";
import SearchbarTest from "@/components/SearchbarTest.vue";
</script>

<template>
  <div class="ZutatenHeader">

    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1 class="aktuelleSeite">Recipes</h1>
        </div>
        <div class="col text-center">
          <router-link to="WhatCanICook">
            <h1 class="nichtaktuelleSeite">What Can I Cook?</h1>
          </router-link>
        </div>
        <div class="col text-center">
          <router-link to="EigeneRezepte">
            <h1 class="nichtaktuelleSeite">Own Recipes</h1>
          </router-link>
        </div>
      </div>
    </div>


    <div class="SearchFilterAdd">
      <SearchFilterAddRecipes/>
    </div>

    <div>
      <router-link to="/CreateRecipe">
        <button type="submit" class="btn btn-primary">Create your own recipe</button>
      </router-link>

    </div>

  </div>

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