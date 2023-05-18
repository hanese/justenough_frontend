<script setup>
import {onMounted, ref} from "vue"

let recipes = ref({});
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
    const customRecipeResponse = await fetch('http://localhost:8000/api/recipes/getCustomRecipes', options)
    const customRecipes = await customRecipeResponse.json()
    recipes = customRecipes.map(recipe => ({
        meal: recipe.meal,
        uuid: recipe.uuid
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


async function deleteCustomRecipe(uuid) {
    const token = getTokenFromCookie();
    const options = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
    const url = `http://localhost:8000/api/recipes/deleteRecipe/${uuid}`;
    await fetch(url, options);
    // Update the ingredients list by removing the deleted ingredient
    if (recipes.value) {
        recipes.value = recipes.value.filter(ingredient => ingredient.uuid !== uuid);
    }
}


//function um ganzes Rezept in neuer Seite anzuzeigen
function newPage(wholeMeal) {
    return {
        name: 'AktuellesRezept',
        query: {id: wholeMeal}
    };
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <router-link to="Rezepte">
                    <h1 class="nichtaktuelleSeite">Recipes</h1>
                </router-link>
            </div>
            <div class="col text-center">
                <router-link to="WhatCanICook">
                    <h1 class="nichtaktuelleSeite">What Can I Cook?</h1>
                </router-link>
            </div>
            <div class="col text-center">
                <h1 class="aktuelleSeite">Own Recipes</h1>
            </div>
        </div>




        <ul style="list-style-type: none; display: block;">
            <li v-if="!isLoading"  v-for="meal in recipes" :key="meal">
                <router-link :to="newPage(meal.uuid)"><span style="display: inline; color: black">{{ meal.meal }}</span></router-link>
            </li>
            <li v-else>
                Loading...
            </li>
        </ul>


    </div>

</template>


<style scoped>
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


.nichtaktuelleSeite {
    transition: all 0.2s ease-in-out;
    margin-top: 50px;
    color: black;
}

.nichtaktuelleSeite:hover {
    color: #a97272;
    transform: scale(1.1);
    cursor: pointer;
}
</style>