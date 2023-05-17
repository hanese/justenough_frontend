<template>
  <div>
    <h1 style="  display: flex; justify-content: center; margin-top: 20px">Create your own recipe</h1>
<div class="inputAll">
    <div class="input-group mb-3">
      <input type="text" id="mealName" class="form-control" v-model="mealName" placeholder="Name of the meal" >
    </div>

    <div class="input-group mb-3">
      <input type="text" id="mealInstructions" class="form-control" v-model="mealInstructions" placeholder="Instructions">
    </div>

    <div v-for="(ingredient, index) in ingredients" :key="index" class="input-group mb-3">
      <input
          type="text"
          class="form-control"
          v-model="ingredient.name"
          :placeholder="'Ingredient ' + (index + 1)"
          @input="getIngredients(ingredient)"
      >
      <input type="text" class="form-control" v-model="ingredient.measure" :placeholder="'Measure ' + (index + 1)">
      <ul v-if="ingredientsList.length > 0" class="suggestions">
        <li v-for="suggestion in ingredientsList" @click="selectIngredient(ingredient, suggestion)">
          {{ suggestion }}
        </li>
      </ul>

    </div>
</div>

    <div class="input-group mb-3">
      <button @click="addIngredientField" class="btn btn-secondary" :disabled="hasEmptyMeasure">
        <span class="material-symbols-outlined" style="padding-top: 6px">add</span>
      </button>
      <button @click="removeIngredientField" class="btn btn-secondary" :disabled="lastIngredientField">
        <span class="material-symbols-outlined" style="padding-top: 6px">remove</span>
      </button>
    </div>

    <p v-if="ingredients.length === 0" class="text-danger">Please provide at least one ingredient.</p>

    <button @click="saveRecipe" class="btn btn-success" :disabled="hasEmptyFields">Save Recipe</button>
  </div>
</template>




<script>
import {ref} from "vue"

let input = ref("");
let ingredientsList = [];

fetch('http://localhost:8000/api/ingredients/getAll')
    .then(response => response.json())
    .then(data => {
      ingredientsList = data.map(item => item.ingredient);
    })
    .catch(error => console.error(error));


export default {
  data() {
    return {
      mealName: "",
      mealInstructions: "",
      ingredients: [{name: "", measure: ""}],
      maxIngredients: 20,
      ingredientsList: []
    };
  },
  computed: {
    hasEmptyMeasure() {
      return this.ingredients.some(ingredient => !ingredient.measure);
    },
    hasEmptyFields() {
      return !this.mealName || !this.mealInstructions || this.ingredients.some(ingredient => !ingredient.measure) || this.ingredients.some(ingredient => !ingredient.name);
    },
    lastIngredientField(){
      return this.ingredients.length === 1;
    }
  },
  methods: {
    addIngredientField() {
      if (this.ingredients.length < this.maxIngredients && this.ingredients.every(ingredient => ingredient.measure)) {
        this.ingredients.push({name: "", measure: ""});
      }
    },
    removeIngredientField() {
      if (this.ingredients.length > 1) {
        this.ingredients.pop();
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
    saveRecipe() {
      const recipeData = {
        meal: this.mealName || 'Null',
        category: 'Null',
        area: 'Null',
        instructions: this.mealInstructions || 'Null',
        meal_thumb: 'Null',
        tags: 'Null',
        youtube: 'Null',
        ...this.getIngredientsData(),
        source: 'Null',
        image_source: 'Null',
        creative_commons_confirmed: 'Null',
        date_modified: 'Null',
      };

      // Send the recipe data to the API endpoint
      this.postRecipeData(recipeData);
    },
    getIngredients(ingredient) {
      if (ingredient.name.length === 0) {
        this.ingredientsList = [];
      } else {
        this.ingredientsList = ingredientsList.filter((item) =>
            item.toLowerCase().includes(ingredient.name.toLowerCase())
        );
      }
    },
    selectIngredient(ingredient, selectedIngredient) {
      ingredient.name = selectedIngredient;
      this.ingredientsList = [];
    },
    getIngredientsData() {
      const ingredientsData = {};
      for (let i = 0; i < this.ingredients.length; i++) {
        const ingredientKey = `ingredient${i + 1}`;
        const measureKey = `measure${i + 1}`;
        const ingredientValue = this.ingredients[i].name || 'Null';
        const measureValue = this.ingredients[i].measure || 'Null';
        ingredientsData[ingredientKey] = ingredientValue;
        ingredientsData[measureKey] = measureValue;
      }
      return ingredientsData;
    }
    ,
    async postRecipeData(recipeData) {
      const token = this.getTokenFromCookie()
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(recipeData),
      };
      try {
        const response = await fetch('http://localhost:8000/api/recipes/postCustomRecipe', options);
        if (response.ok) {
          console.log('hat geklappt');
          await this.$router.push('/Rezepte');

        } else {
          console.error("failed posting custom recipe");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    ,
  },
}
;
</script>

<style scoped>
.suggestions {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top: none;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  list-style-type: none;
  z-index: 9999;
}

.suggestions li {
  padding: 8px 12px;
  cursor: pointer;
}

.suggestions li:hover {
  background-color: #f5f5f5;
}

.input-group{
  display: flex;
  justify-content: center;
}

.inputAll {
  padding: 20px;
  padding-right: 250px;
  padding-left: 250px;
}
</style>
