<script setup>
import NavigationNavbar from "@/components/NavigationNavbar.vue";
import ProfileNavbar from "@/components/ProfileNavbar.vue";


</script>


<template>

  <div class="header">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style="float: left">
      Dropdown Menu
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a class="dropdown-item" href="rezepte.html">Rezepte</a></li>
      <li><a class="dropdown-item" href="zutaten.html">Zutaten</a></li>
      <li><a class="dropdown-item" href="einkaufsliste.html">Einkaufsliste</a></li>
    </ul>

    <h1>JustEnough</h1>

    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style="float: left">
      Dropdown Menu
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a class="dropdown-item" href="rezepte.html">Rezepte</a></li>
      <li><a class="dropdown-item" href="zutaten.html">Zutaten</a></li>
      <li><a class="dropdown-item" href="einkaufsliste.html">Einkaufsliste</a></li>
    </ul>
  </div>





</template>



<style scoped>
h1{
  font-family: "Comic Sans MS",serif;
  font-size: 50px;
  flex-grow: 1;
  text-align: center;
}

.header{
  display: flex;
  align-items: center;
}
</style>