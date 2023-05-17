<script setup>
import store from "@/store";
import router from "@/router";

const logout = () => {
  store.dispatch('performLogout');
  router.push('/');
};
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">

<template>


  <div class="header">

<!-- linke Seite Navbar mit Dropdown -->
    <div class="navigation-navbar">
      <button class="btn btn-secondary dropdown-toggle rounded-circle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style="float: left; border: none; background-color: transparent;">
      <span class="material-symbols-outlined" style="padding-top: 6px; font-size: 1.5rem;">menu</span>
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
    <router-link to="/home">
    <h1 class="JustEnoughH1">JustEnough</h1>
    </router-link>
<!--     -->


<!-- rechte Seite Navbar mit Dropdown -->
    <div class="profile-navbar">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style="float: right; border: none; background-color: transparent;">
        <span class="material-symbols-outlined" style="padding-top: 6px">settings</span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><router-link to="/profil" class="dropdown-item" style=" color: #a97272">Profil</router-link></li>
        <li><hr class="dropdown-divider"></li>
        <li @click="logout" class="dropdown-item">Logout</li>
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
  font-family: "Open Sans", sans-serif;
  font-size: 50px;
  color: White;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #a97272;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.navigation-navbar{
  justify-content: flex-start;
  width: 50px;
  height: 70px;
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.profile-navbar{
  justify-content: flex-end;
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.dropdown-menu {
  justify-content: flex-start;
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