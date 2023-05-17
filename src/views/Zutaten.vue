<script setup>
import SearchFilterAdd from "@/components/SearchFilterAddIngredients.vue";
import SearchbarTest from "@/components/SearchbarTest.vue";
import SearchFilterAddIngredients from "@/components/SearchFilterAddIngredients.vue";
import FooterPers from "@/components/FooterPers.vue";
</script>

<template>
  <div class="ZutatenHeader">

    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1 class="aktuelleSeite">Ingredients</h1>
        </div>
        <div class="col text-center">
          <router-link to="Vorratskammer">
            <h1 class="nichtaktuelleSeite">Storage</h1>
          </router-link>
        </div>

      </div>
    </div>

    <div class="SearchFilterAdd">
      <SearchFilterAddIngredients/>
    </div>

  </div>


  <FooterPers/>
</template>

<style scoped>


.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
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