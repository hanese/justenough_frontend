<script setup>
/*
import NavigationNavbar from "@/components/NavigationNavbar.vue";
import ProfileNavbar from "@/components/ProfileNavbar.vue";
*/

</script>


<template>


  <div class="header">

<!-- linke Seite Navbar mit Dropdown -->
    <div class="navigation-navbar">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style="float: left">
      <span class="material-symbols-outlined" style="padding-top: 6px">menu</span>
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
    </div>
<!--     -->


<!-- Mitte Navbar mit Logo -->
    <router-link to="/">
    <h1 class="JustEnoughH1">JustEnough</h1>
    </router-link>
<!--     -->


<!-- rechte Seite Navbar mit Dropdown -->
    <div class="profile-navbar">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style="float: right">
        <span class="material-symbols-outlined" style="padding-top: 6px">settings</span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><router-link to="/profil" class="dropdown-item" style=" color: #a97272">Profil</router-link></li>
        <li><hr class="dropdown-divider"></li>
        <li><router-link to="/login" class="dropdown-item" style=" color: #a97272">Login</router-link></li>
      </ul>
    </div>
<!--     -->

  </div>

</template>


<style scoped>
h1{
  color: white;
  text-align: center;
  margin: 0 auto;
}
.header {
  font-family: "Helvetica Neue", serif;
  font-size: 50px;
  color: White;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #a97272;
}

.navigation-navbar{
  justify-content: flex-start;
}

.profile-navbar{
  justify-content: flex-end;
}

.JustEnoughH1 {
  transition: all 0.2s ease-in-out;
}

.JustEnoughH1:hover{
  color: #181818;
  transform: scale(1.05);
  cursor: pointer;
}
</style>