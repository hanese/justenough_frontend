<script>
export default {
  name: "ProfileNavbar"
}
</script>

<template>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
            aria-expanded="false" style="float: left">
      Dropdown Menu
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a class="dropdown-item" href="Rezepte.vue">Rezepte</a></li>
      <li><a class="dropdown-item" href="zutaten.html">Zutaten</a></li>
      <li><a class="dropdown-item" href="einkaufsliste.html">Einkaufsliste</a></li>
    </ul>
</template>

<style scoped>

</style>