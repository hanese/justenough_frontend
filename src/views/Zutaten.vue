<script setup>
import SearchFilterAdd from "@/components/SearchFilterAddIngredients.vue";
import SearchbarTest from "@/components/SearchbarTest.vue";
import SearchFilterAddIngredients from "@/components/SearchFilterAddIngredients.vue";
import FooterPers from "@/components/FooterPers.vue";
</script>

<template>
  <div class="ZutatenHeader">

    <div>
      <h1 class="WillkommenH2">Zutaten</h1>
    </div>


    <div class="SearchFilterAdd">
      <SearchFilterAddIngredients/>
    </div>

  </div>


  <FooterPers/>
</template>

<style scoped>
h1 {
  text-align: center;
  padding-bottom: 20px;
  font-size: 30pt;
}

.WillkommenH2 {
  transition: all 0.2s ease-in-out;
  margin-top: 50px;
}

.WillkommenH2:hover{
  transform: scale(1.1);
  cursor: pointer;
}

</style>