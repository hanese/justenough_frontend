<template>
  <div>
    <h1>Create your own recipe</h1>

    <div class="input-group mb-3">
      <input type="text" id="mealName" class="form-control" v-model="mealName" placeholder="Name of the meal">
    </div>

    <div class="input-group mb-3">
      <input type="text" id="mealInstructions" class="form-control" v-model="mealInstructions" placeholder="Instructions">
    </div>

    <div v-for="(ingredient, index) in ingredients" :key="index" class="input-group mb-3">
      <input type="text" class="form-control" v-model="ingredient.name" :placeholder="'Ingredient ' + (index + 1)">
      <input type="text" class="form-control" v-model="ingredient.measure" :placeholder="'Measure ' + (index + 1)">
    </div>

    <button @click="addIngredientField" class="btn btn-primary">Add Ingredient</button>
    <p v-if="ingredients.length === 0" class="text-danger">Please provide at least one ingredient.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mealName: '',
      mealInstructions: '',
      ingredients: [{ name: '', measure: '' }],
      maxIngredients: 20,
    };
  },
  methods: {
    addIngredientField() {
      if (this.ingredients.length < this.maxIngredients) {
        this.ingredients.push({ name: '', measure: '' });
      }
    },
  },
};
</script>
