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

  <div>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><router-link to="/zutaten">Zutaten</router-link></li>
      <li><router-link to="/rezepte">Rezepte</router-link></li>
      <li><router-link to="/einkaufsliste">Einkaufsliste</router-link></li>
    </ul>
  </div>


</template>

<style scoped>

</style>