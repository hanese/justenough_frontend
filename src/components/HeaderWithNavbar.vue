<script setup>
import NavigationNavbar from "@/components/NavigationNavbar.vue";
import ProfileNavbar from "@/components/ProfileNavbar.vue";


</script>


<template>

  <div class="header">

    <div>
      <NavigationNavbar/>
    </div>

    <div class="header"></div>
    <router-link to="/">
      <h1>JustEnough</h1>

    </router-link>


    <div>
      <ProfileNavbar/>
    </div>
  </div>


</template>


<style scoped>
h1{
  color: white;
  position: center;
}
.header {
  font-family: "Helvetica Neue", serif;
  font-size: 50px;

  color: White;
  display: flex;
  align-items: center;
  background-color: #a97272;
}


</style>