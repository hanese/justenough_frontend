<script setup>
  import FooterPers from "@/components/FooterPers.vue";

  import { ref } from 'vue';

  const items = ref([
    { id: 1, title: "Nudeln Numero 1", text: "Nudeln Beschreibung" },
    { id: 2, title: "Nudeln Numero 2", text: "Nudeln Beschreibung" },
    { id: 3, title: "Nudeln Numero 3", text: "Nudeln Beschreibung" },
    { id: 4, title: "Nudeln Numero 4", text: "Nudeln Beschreibung" },
    { id: 5, title: "Nudeln Numero 5", text: "Nudeln Beschreibung" },
    { id: 6, title: "Nudeln Numero 6", text: "Nudeln Beschreibung" },
    { id: 7, title: "Nudeln Numero 7", text: "Nudeln Beschreibung" },
  ]);

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
  <div class="carousel">
    <div class="carousel-inner">
      <div v-for="(item, index) in items" :key="index" :class="['carousel-item', { 'active': index === currentIndex }]">
        <img :src="item.image" :alt="item.caption" class="carousel-image">
        <div class="carousel-caption">
          <h3>{{ item.title }}</h3>
          <p>{{item.text}}</p>
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
</div>
  <FooterPers/>
</template>
<!--
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
-->


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

.WillkommenH2:hover{
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