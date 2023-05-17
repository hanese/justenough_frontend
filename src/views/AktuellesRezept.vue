<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import FooterPers from "@/components/FooterPers.vue";

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


<template>
  <div>
    <div v-if="wholeMeal">
      <h2 class="topic">{{ wholeMeal.meal }}</h2>
      <div class="content">
        <div class="meal-image">
          <img :src="wholeMeal.meal_thumb" alt="Meal Thumb" />
        </div>
        <div class="ingredients-block">
          <table class="ingredients-table">
            <h3>Ingredients</h3>
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
