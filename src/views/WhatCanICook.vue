<script setup>
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

async function getRecipesByStorageIngredients() {
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
    const ingredients = storage.map(ingredient => ingredient.item)
    const url = new URL('http://localhost:8000/api/recipes/getRecipesByIngredients');
    ingredients.forEach(ingredient => {
        url.searchParams.append('ingredients', ingredient);
    });
    const recipesResponse = await fetch(url, options)
    const recipes = await recipesResponse.json()

}

getRecipesByStorageIngredients()
</script>


<template>
    <h1>You can cook the following recipes:</h1>

</template>

<style scoped>

</style>