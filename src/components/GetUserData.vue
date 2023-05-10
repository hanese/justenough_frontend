<template>
    <div>
        <button @click="getUserInfo">Get User Info</button>
        <div v-if="userInfo">
            <h2>name: {{ userInfo.name }}</h2>
            <p>password: {{ userInfo.password }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: null,
        };
    },
    methods: {
        async getUserInfo() {
            const token = this.getTokenFromCookie();
            if (!token) {
                console.log('No token found in cookie');
                return;
            }

            const response = await fetch('http://91.107.239.206:8000/users/me/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                this.userInfo = await response.json();
            } else {
                console.log('Failed to fetch user info');
            }
        },
        getTokenFromCookie() {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith('access_token=')) {
                    return cookie.substring('access_token='.length, cookie.length);
                }
            }
            return null;
        },
    },
};
</script>
<style scoped>

</style>