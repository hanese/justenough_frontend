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
      <router-link to="/zutaten">Zutaten</router-link>
      <router-link to="/rezepte">Rezepte</router-link>
      <router-link to="/einkaufsliste">Einkaufsliste</router-link>
    </ul>
</template>

<style scoped>

</style>