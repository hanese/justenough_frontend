<template>
  <div>
    <div v-if="wholeMeal">
      <h2>{{ wholeMeal.meal }}</h2>
      <div class="content">
        <div class="ingredients-block">
          <table class="ingredients-table">
            <tr v-for="index in 20" :key="index">
              <td v-if="wholeMeal['measure' + index] !== 'None'">
                {{ wholeMeal['measure' + index] }}
              </td>
              <td v-if="wholeMeal['ingredient' + index] !== 'None'">
                {{ wholeMeal['ingredient' + index] }}
              </td>
            </tr>
          </table>
        </div>
        <div class="meal-image">
          <img :src="wholeMeal.meal_thumb" alt="Meal Thumb" />
        </div>
      </div>
      <div class="instructions-block">
        <p class="instructions-text">{{ wholeMeal.instructions }}</p>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const wholeMeal = ref(null);

async function showWholeRecipe(id) {
  const halfUrl = 'http://localhost:8000/api/recipes/getRecipe/';
  let fullUrl = halfUrl + id.toString();
  try {
    const response = await fetch(fullUrl);
    const data = await response.json();
    wholeMeal.value = data[0];
  } catch (error) {
    console.log(error);
  }
}

const route = useRoute();
showWholeRecipe(route.query.id);
</script>

<style scoped>
.content {
  display: flex;
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
}

.instructions-block {
  margin-top: 20px;
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.instructions-text {
  line-height: 1.5;
}
</style>
