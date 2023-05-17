<template>
    <div>
        <h1>Create your own recipe</h1>

        <div class="input-group mb-3">
            <input type="text" id="mealName" class="form-control" v-model="mealName" placeholder="Name of the meal">
        </div>

        <div class="input-group mb-3">
            <input type="text" id="mealInstructions" class="form-control" v-model="mealInstructions"
                   placeholder="Instructions">
        </div>

        <div v-for="(ingredient, index) in ingredients" :key="index" class="input-group mb-3">
            <input type="text" class="form-control" v-model="ingredient.name"
                   :placeholder="'Ingredient ' + (index + 1)">
            <input type="text" class="form-control" v-model="ingredient.measure"
                   :placeholder="'Measure ' + (index + 1)">
        </div>

        <div class="input-group mb-3">
            <button @click="addIngredientField" class="btn btn-secondary"><span class="material-symbols-outlined"
                                                                                style="padding-top: 6px">add</span>
            </button>
        </div>

        <p v-if="ingredients.length === 0" class="text-danger">Please provide at least one ingredient.</p>

        <button @click="saveRecipe" class="btn btn-success">Save Recipe</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mealName: '',
            mealInstructions: '',
            ingredients: [{name: '', measure: ''}],
            maxIngredients: 20,
        };
    },
    methods: {
        addIngredientField() {
            if (this.ingredients.length < this.maxIngredients) {
                this.ingredients.push({name: '', measure: ''});
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
        }
        ,
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

