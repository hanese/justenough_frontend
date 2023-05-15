<script setup>
import { ref, onMounted } from 'vue';

let ingredients = ref([]);
let isLoading = ref(true);

// Get all ingredients from storage
onMounted(async () => {
  const token = getTokenFromCookie()
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },

  };
  const storageResponse = await fetch('http://localhost:8000/api/storage/getStorage', options)
  const storage = await storageResponse.json()
  ingredients = storage.map(ingredient => ingredient.item)
  isLoading.value = false;
})
function getTokenFromCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('access_token=')) {
      return cookie.substring('access_token='.length, cookie.length);
    }
  }
  return null;
}

</script>

<template>
  <div>
    <h1>Storage</h1>
    <ul v-if="!isLoading">
      <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }} <button><span class="material-symbols-outlined" style="padding-top: 6px">delete</span></button></li>
    </ul>
  </div>
</template>



<style scoped>

</style>