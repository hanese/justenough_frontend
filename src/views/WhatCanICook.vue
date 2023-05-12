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

async function getRecipesByStorageIngredients(){

  const token = getTokenFromCookie()
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };
  const response = await fetch('http://localhost:8000/api/storage/getStorage', options)
  const data = await response.json()

  const url = new URL('https://example.com/api/recipes');
  ingredients.forEach(ingredient => {
    url.searchParams.append('ingredient', ingredient);
  });
  const recipes = await fetch('http://api/recipes/getRecipesByIngredients', options)

}
</script>


<template>
  <h1>You can cook the following recipes:</h1>

</template>

<style scoped>

</style>