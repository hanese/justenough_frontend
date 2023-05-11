<script setup>
// get komplettes Rezept
import {useRoute} from "vue-router";
import {ref} from "vue";

const wholeMeal = ref(null)

async function showWholeRecipe(id) {
    const halfUrl = 'http://localhost:8000/api/recipes/getRecipe/';
    let fullUrl = halfUrl + id.toString();
    try {
        const response = await fetch(fullUrl);
        const data = await response.json();
        wholeMeal.value = data[0]
    } catch (error) {
        console.log(error);
    }
}

const route = useRoute()
showWholeRecipe(route.query.id)

</script>

<template>
    <h1>Aktuelles Rezept</h1>
    <div>
        <div v-if="wholeMeal">
            <h2>{{ wholeMeal.meal }}</h2>
            <p>{{ wholeMeal.instructions }}</p>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<style scoped>
</style>
