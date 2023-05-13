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
    </form>
  </div>
</template>

<script>
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
            this.token = data.access_token;
            document.cookie = `access_token=${this.token}; expires=${new Date(data.expires_in * 1000)}`;
        },
    },
};
</script>

<style scoped>

</style>