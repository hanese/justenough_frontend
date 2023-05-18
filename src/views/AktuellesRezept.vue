<script setup>
import {ref, onBeforeMount, onMounted} from 'vue';
import {useRoute} from "vue-router";
import FooterPers from "@/components/FooterPers.vue";

let wholeMeal = ref({})
let ingredients = ref([]);
let isLoading = ref(true);
const storagedIngredients = [];

// Zeige das ganze Rezept an
async function showWholeRecipe(id) {
    const halfUrl = 'http://localhost:8000/api/recipes/getRecipe/';
    const fullUrl = halfUrl + id.toString();
    try {
        const response = await fetch(fullUrl);
        const data = await response.json();
        wholeMeal = data[0];
        await getStorageIngredients();
        for (let ingredientIndex in ingredients) {
            if (ingredientIndex > ingredients.length) {
                break;
            }
            for (let i = 0; i <= 20; i++) {
                if (ingredients[ingredientIndex].includes(wholeMeal['ingredient' + i])) {
                    storagedIngredients.push(ingredients[ingredientIndex]);
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}

// Hole alle Zutaten aus dem Speicher
async function getStorageIngredients() {
    const token = getTokenFromCookie();
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };
    const storageResponse = await fetch('http://localhost:8000/api/storage/getStorage', options);
    const storage = await storageResponse.json();
    ingredients = storage.map(ingredient => ingredient.item);
}

// Hole Token aus Cookie
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

onMounted(async () => {
    const route = useRoute();
    await showWholeRecipe(route.query.id);
    await getStorageIngredients();
    isLoading.value = false;
});
</script>


<template>
  <div>
    <div v-if="wholeMeal">
      <h2 class="topic">{{ wholeMeal.meal }}</h2>
      <div class="content">
        <div class="ingredients-block">
          <table class="ingredients-table">
            <h3>Ingredients</h3>
            <tr v-for="index in 20" :key="index">
              <td v-if="wholeMeal['measure' + index] !== 'None' && wholeMeal['measure' + index] !== 'Null'">
                {{ wholeMeal['measure' + index] }}
              </td>
              <td v-if="wholeMeal['ingredient' + index] !== 'None' && wholeMeal['ingredient' + index] !== 'Null'">
                {{ wholeMeal['ingredient' + index] }}
              </td>
            </tr>
          </table>
        </div>
        <div class="meal-image" v-if="wholeMeal.meal_thumb !== 'Null'">
          <img :src="wholeMeal.meal_thumb" alt="Meal Thumb" />
        </div>
      </div>
      <div class="instructions-block">
        <h2>Instructions</h2>
        <p class="instructions-text">{{ wholeMeal.instructions }}</p>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
    <div>
        <div v-if="!isLoading">
            <h2 class="topic">{{ wholeMeal.meal }}</h2>
            <div class="content">
                <div class="meal-image">
                    <img :src="wholeMeal.meal_thumb" alt="Meal Thumb"/>
                </div>
                <div class="ingredients-block">
                    <table class="ingredients-table">
                        <h3>Ingredients</h3>
                        <tr v-for="index in 20" :key="index">
                            <td v-if="wholeMeal['measure' + index] !== 'None'">
                                {{ wholeMeal['measure' + index] }}
                            </td>
                            <td v-if="wholeMeal['ingredient' + index] !== 'None'"
                                :style="{ color: storagedIngredients.includes(wholeMeal['ingredient' + index]) ? 'green' : 'red' }">
                                {{ wholeMeal['ingredient' + index] }}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="instructions-block">
                <h2>Instructions</h2>
                <p class="instructions-text">{{ wholeMeal.instructions }}</p>
            </div>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>

    <FooterPers/>
</template>


<style scoped>
.topic {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 20px;
}

.content {
    display: flex;
    margin: 20px;
}

.ingredients-block {
    margin-right: 20px;
}

.ingredients-table {
    margin-bottom: 10px;
}

td {
    padding: 3px;
}

.meal-image {
    flex: 1;
    text-align: right;
}

.meal-image img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
}

.instructions-block {
    margin: 20px 50px 50px;
    background-color: #f2f2f2;
    padding: 10px;
    border: none;
    border-radius: 10px;
    line-height: 1.8;

}

.instructions-text {
    line-height: 1.5;
}

.ingredients-block {
    flex: 1;
}

.ingredients-table {
    margin-bottom: 10px;
}

td {
    padding: 3px;
}
</style>
