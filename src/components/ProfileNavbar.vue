<script>
import Rezepte from '../views/Rezepte.vue';
export default {
  name: "ProfileNavbar"
}
</script>

<template>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
            aria-expanded="false" style="float: right">
      Dropdown Menu
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a class="dropdown-item" href="rezepte.html">Einstellungen</a></li>
      <li><a class="dropdown-item" href="zutaten.html">Profil</a></li>
      <li><a class="dropdown-item" href="einkaufsliste.html">Whatever</a></li>
    </ul>
</template>

<style scoped>

</style>