<script setup>
import FooterPers from "@/components/FooterPers.vue";
import {onMounted, ref} from 'vue';

let randomRecipes = ref([])
let isLoading = ref(true);
let items = ref([])

async function fetchRandomMeals() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet.charAt(randomIndex);
    const response = await fetch("http://localhost:8000/api/recipes/getRecipesByIngredients?ingredients=" + randomLetter)
    randomRecipes = await response.json()
    items = ref([
        {
            id: randomRecipes[0].id,
            meal: randomRecipes[0].meal,
            instructions: randomRecipes[0].instructions,
            thumb: randomRecipes[0].meal_thumb
        },
        {
            id: randomRecipes[1].id,
            meal: randomRecipes[1].meal,
            instructions: randomRecipes[1].instructions,
            thumb: randomRecipes[1].meal_thumb
        },
        {
            id: randomRecipes[2].id,
            meal: randomRecipes[2].meal,
            instructions: randomRecipes[2].instructions,
            thumb: randomRecipes[2].meal_thumb
        },
        {
            id: randomRecipes[3].id,
            meal: randomRecipes[3].meal,
            instructions: randomRecipes[3].instructions,
            thumb: randomRecipes[3].meal_thumb
        },
        {
            id: randomRecipes[4].id,
            meal: randomRecipes[4].meal,
            instructions: randomRecipes[4].instructions,
            thumb: randomRecipes[4].meal_thumb
        },
        {
            id: randomRecipes[5].id,
            meal: randomRecipes[5].meal,
            instructions: randomRecipes[5].instructions,
            thumb: randomRecipes[5].meal_thumb
        },
        {
            id: randomRecipes[6].id,
            meal: randomRecipes[6].meal,
            instructions: randomRecipes[6].instructions,
            thumb: randomRecipes[6].meal_thumb
        },
    ]);
}


onMounted(async () => {
    debugger
    await fetchRandomMeals();
    isLoading.value = false;
    debugger
});


const currentIndex = ref(0);

const prevSlide = () => {
    if (currentIndex.value === 0) {
        currentIndex.value = items.value.length - 1;
    } else {
        currentIndex.value--;
    }
};

const nextSlide = () => {
    if (currentIndex.value === items.value.length - 1) {
        currentIndex.value = 0;
    } else {
        currentIndex.value++;
    }
};

</script>

<template>

    <h2 class="WillkommenH2">Willkommen bei JustEnough :-)</h2>
    <div class="carousel-container">
        <div v-if="!isLoading" class="carousel">
            <div class="carousel-inner">
                <div v-for="(item, index) in items" :key="index"
                     :class="['carousel-item', { 'active': index === currentIndex }]">
                    <img :src="item.thumb" :alt="item.caption" class="carousel-image">
                    <div class="carousel-caption">
                        <h3>{{ item.meal }}</h3>
                    </div>
                </div>
            </div>

            <a class="carousel-control-prev" @click="prevSlide">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only"></span>
            </a>
            <a class="carousel-control-next" @click="nextSlide">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only"></span>
            </a>
        </div>
        <div v-if="isLoading">
            Loading
        </div>
    </div>
    <FooterPers/>
</template>


<style scoped>
body {
    background-color: #f1f1f1;
    padding: 20px;
    font-family: 'Open Sans', sans-serif;
}

.WillkommenH2 {
    transition: all 0.2s ease-in-out;
    margin-top: 50px;
}

.WillkommenH2:hover {
    transform: scale(1.1);
    cursor: pointer;
}

.card {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    text-align: center;
    width: calc(25% - 20px);
    margin: 10px;
}

.card h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.card p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #666;
}

input[type="text"] {
    width: 100%;
    height: 50px; /* Hier wird die Höhe der Suchleiste festgelegt */
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    padding: 10px;
    cursor: pointer;
}

li:hover {
    background-color: #ddd;
}

.carousel-inner {
    position: relative;
    width: 100%;
    height: 100%;
}

.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
}

.carousel-item.active {
    opacity: 1;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
}

.carousel-control-prev,
.carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.carousel-control-prev {
    left: 10px;
}

.carousel-control-next {
    right: 10px;
}

.carousel-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.carousel {
    position: relative;
    width: 70%;
    height: 300px;
}
</style>