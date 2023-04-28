<script setup>
import HeaderWithNavbar from "@/components/HeaderWithNavbar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import GetUserData from "@/components/GetUserData.vue";
import LoginForm from "@/components/LoginForm.vue";
</script>

<template>

    <header>
        <HeaderWithNavbar/>
        <router-view/>
        <HelloWorld/>
        <LoginForm/>
        <GetUserData/>
    </header>

  <main>

  </main>

  <footer>

  </footer>

</template>

<style scoped>
header {
  line-height: 4;
}
</style>
