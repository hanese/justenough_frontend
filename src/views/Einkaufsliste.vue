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
  const storageResponse = await fetch('http://localhost:8000/api/shopping/getShoppingItems', options)
  const storage = await storageResponse.json()
  ingredients = storage.map(ingredient => ({
    item: ingredient.shopping_item,
    uuid: ingredient.uuid
  }));
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

async function deleteFromShoppingList(uuid) {
  const token = getTokenFromCookie();
  const options = {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  const url = `http://localhost:8000/api/shopping/deleteShoppingItem/${uuid}`;
  await fetch(url, options);

}


</script>

<template>
  <div>
    <h1>Shopping List</h1>
    <ul v-if="!isLoading">
      <li v-for="ingredient in ingredients" :key="ingredient">
        <div class="ingredient-container">
          <div class="ingredient-name">{{ ingredient.item }}</div>
          <div class="hidden-button">
            <button class="btn btn-outline-secondary" type="button" @click="deleteFromShoppingList(ingredient.uuid)">
              <span class="material-symbols-outlined" style="padding-top: 6px">delete</span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>



<style scoped>
li {
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-bottom: 10px;
}

li:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(169, 114, 114, 0.15);
  z-index: -1;
}

.ingredient-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.ingredient-name {
  margin-right: 10px;
}

.hidden-button {
  display: none;
}

li:hover .hidden-button {
  display: inline-block;
}
</style>