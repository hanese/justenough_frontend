<script setup>
import SearchFilterAdd from "@/components/SearchFilterAddRecipes.vue";
</script>

<template>
  <div class="ZutatenHeader">

    <div>
      <h1 class="WillkommenH2">Rezepte</h1>
    </div>

    <div class="SearchFilterAdd">
      <SearchFilterAdd/>
    </div>

  </div>

</template>

<style scoped>
h1{
  text-align: center;
  padding-bottom: 20px;
  font-size: 30pt;
}

.WillkommenH2 {
  transition: all 0.2s ease-in-out;
  margin-top: 50px;
}

.WillkommenH2:hover{
  color: #a97272;
  transform: scale(1.1);
  cursor: pointer;
}
</style>