<template>
  <div class="container">
    <form @submit.prevent="register" class="mt-5">

      <div class="mb-3">
        <label for="username" class="form-label">Username:</label>
        <input type="text" id="username" class="form-control" v-model="username">
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" id="password" class="form-control" v-model="password">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Repeat Password:</label>
        <input type="password" id="password-repeat" class="form-control" v-model="repeatedPassword">
      </div>

      <button type="submit" class="btn btn-primary">Registrieren</button>

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
      repeatedPassword: '',
      token: '',
    };
  },
  methods: {
    async register() {
      const repeatedPassword = this.repeatedPassword
      const userData = {
        username: this.username,
        password: this.password
      };
      // Überprüfen, ob mindestens ein Großbuchstabe vorhanden ist
      const hasUpperCase = /[A-Z]/.test(userData.password);
      // Überprüfen, ob mindestens eine Zahl vorhanden ist
      const hasNumber = /\d/.test(userData.password);
      // Überprüfen, ob die Mindestlänge 8 Zeichen beträgt
      const hasMinLength = userData.password.length >= 8;
      // Rückgabe des Ergebnisses der Überprüfung
      if (!(hasUpperCase && hasNumber && hasMinLength)) {
        return 0
      } else if (repeatedPassword !== userData.password) {
        return 0
      } else {

        const response = await fetch('http://localhost:8000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        if (response.status === 200 && await response.json() == null) {
          await this.$router.push('/');
        } else {
          console.log("nicht funktioniert MANNO")
        }
      }
    },
  },
};
</script>

<style scoped>

</style>