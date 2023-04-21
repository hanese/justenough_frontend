<script>
export default {
  name: "ProfileNavbar"
}
</script>

<template>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
            aria-expanded="false" style="float: left">
      <span class="material-symbols-outlined" style="padding-top: 6px">
menu
</span>
  </button>

  <div>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><router-link to="/zutaten" class="dropdown-item" style=" color: #a97272">Zutaten</router-link></li>
      <li><hr class="dropdown-divider"></li>
      <li><router-link to="/rezepte" class="dropdown-item" style=" color: #a97272">Rezepte</router-link></li>
      <li><hr class="dropdown-divider"></li>
      <li><router-link to="/einkaufsliste" class="dropdown-item" style=" color: #a97272">Einkaufsliste</router-link></li>
    </ul>
  </div>


</template>

<style scoped>

</style>