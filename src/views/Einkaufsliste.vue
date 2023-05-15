<script setup>
import FooterPers from "@/components/FooterPers.vue";

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
  const storageResponse = await fetch('http://localhost:8000/api/shopping/getShoppingItems', options)
  const storage = await storageResponse.json()
  ingredients = storage.map(ingredient => ingredient.shopping_item)
  debugger
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
    <h1>Test</h1>
    <ul v-if="!isLoading">
      <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
    </ul>
  </div>

  <FooterPers/>

</template>

<style>
.WillkommenH2 {
  text-align: center;
  transition: all 0.2s ease-in-out;
  margin-top: 50px;
}

.WillkommenH2:hover{
  transform: scale(1.1);
  cursor: pointer;
}
</style>
