<script setup>
import SearchFilterAdd from "@/components/SearchFilterAddRecipes.vue";
import SearchFilterAddRecipes from "@/components/SearchFilterAddRecipes.vue";
import SearchbarTest from "@/components/SearchbarTest.vue";
</script>

<template>
  <div class="ZutatenHeader">

    <div>
      <h1>Rezepte</h1>
    </div>

    <div class="SearchFilterAdd">
      <SearchbarTest/>
    </div>

  </div>

</template>

<style scoped>
h1{
  text-align: center;
  padding-bottom: 20px;
  font-size: 30pt;
}
.ZutatenHeader {

}
</style>