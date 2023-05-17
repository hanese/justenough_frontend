<script setup>
import {ref, onMounted} from 'vue';

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
  ingredients = storage.map(ingredient => ({
    item: ingredient.item,
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



async function deleteFromStorage(uuid) {
  const token = getTokenFromCookie();
  const options = {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  const url = `http://localhost:8000/api/storage/deleteItem/${uuid}`;
  await fetch(url, options);
  // Update the ingredients list by removing the deleted ingredient
  if (ingredients.value) {
    ingredients.value = ingredients.value.filter(ingredient => ingredient.uuid !== uuid);
  }
}

</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <router-link to="Zutaten">
            <h1 class="nichtaktuelleSeite">Ingredients</h1>
          </router-link>
        </div>
        <div class="col text-center">
          <h1 class="aktuelleSeite">Storage</h1>
        </div>
      </div>
    </div>

    <ul v-if="!isLoading">
      <li v-for="ingredient in ingredients" :key="ingredient">
        <div class="ingredient-container">
          <div class="ingredient-name">{{ ingredient.item }}</div>
          <div class="hidden-button">
            <button class="btn btn-outline-secondary" type="button" @click="deleteFromStorage(ingredient.uuid)">
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

.aktuelleSeite {
  transition: all 0.2s ease-in-out;
  margin-top: 50px;
  color: black;
  background-color: rgba(169, 114, 114, 0.34); /* Hintergrundfarbe */
  display: inline-block; /* Um den Rahmen um den Text zu setzen */
  padding: 5px; /* Abstand innerhalb des Rahmens */
  margin-right: 10px; /* Abstand zwischen "Ingredients" und "Storage" */
  border: none;
  border-radius: 20px;
}


.nichtaktuelleSeite{
  transition: all 0.2s ease-in-out;
  margin-top: 50px;
  color: black;
}

.nichtaktuelleSeite:hover{
  color: #a97272;
  transform: scale(1.1);
  cursor: pointer;
}
</style>