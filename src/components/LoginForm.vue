<template>
  <div class="container">
    <form @submit.prevent="login" class="mt-5">
      <div class="mb-3">
        <label for="username" class="form-label">Username:</label>
        <input type="text" id="username" class="form-control" v-model="username">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" id="password" class="form-control" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <router-link to="/Registrierung">
        <button type="submit" class="btn btn-primary">Registrieren</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {
      username: '',
      password: '',
      token: '',
    };
  },
  methods: {
    async login() {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=password&username=${this.username}&password=${this.password}`,
      });
      const data = await response.json();
      if (response.status === 200) {
        await store.dispatch('performLogin');

        this.token = data.access_token;
        const now = new Date()
        document.cookie = `access_token=${this.token}; expires=${new Date(now.getTime() + 1800000)}`;
        await this.$router.push('/home');
      }
    },
  },
};
</script>

<style scoped>

</style>