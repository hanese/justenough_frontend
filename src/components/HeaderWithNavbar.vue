<script setup>
import NavigationNavbar from "@/components/NavigationNavbar.vue";
import ProfileNavbar from "@/components/ProfileNavbar.vue";


</script>


<template>

  <div class="header">

    <div>
      <NavigationNavbar/>
    </div>
    

      <h1>JustEnough</h1>


    <div>
      <ProfileNavbar/>
    </div>
  </div>


</template>


<style scoped>
h1 {
  font-family: "Comic Sans MS", serif;
  font-size: 50px;
  flex-grow: 1;
  text-align: center;
  color: white;
}

.header {
  display: flex;
  align-items: center;
  background-color: powderblue;
}
</style>