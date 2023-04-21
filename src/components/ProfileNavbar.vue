<script>

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
      <li><router-link to="/einstellungen">Einstellungen</router-link></li>
      <li><router-link to="/profil">Profil</router-link></li>
    </ul>
</template>

<style scoped>

</style>