<script>

export default {
  name: "ProfileNavbar"
}
</script>

<template>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
            aria-expanded="false" style="float: right">
<span class="material-symbols-outlined" style="padding-top: 6px">
settings
</span>  </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><router-link to="/einstellungen" class="dropdown-item" style=" color: #a97272">Einstellungen</router-link></li>
      <li><hr class="dropdown-divider"></li>
      <li><router-link to="/profil" class="dropdown-item" style=" color: #a97272">Profil</router-link></li>
    </ul>
</template>

<style scoped>

</style>