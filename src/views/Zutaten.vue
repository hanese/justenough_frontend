<script setup>
import SearchFilterAdd from "@/components/SearchFilterAddIngredients.vue";
import SearchbarTest from "@/components/SearchbarTest.vue";
</script>

<template>
  <div class="ZutatenHeader">

    <div>
      <h1>Zutaten</h1>
    </div>


    <div class="SearchFilterAdd">
      <SearchbarTest/>
    </div>

  </div>

</template>

<style scoped>
h1 {
  text-align: center;
  padding-bottom: 20px;
  font-size: 30pt;
}

.ZutatenHeader {

}
</style>