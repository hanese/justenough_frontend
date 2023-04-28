<template>
    <div>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password">
            <button type="submit">Login</button>
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