<script setup>
  import FooterPers from "@/components/FooterPers.vue";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import "swiper/swiper-bundle.css";
  import {ref} from "vue";

  /*
  const cards = ref([
  { id: 1, title: "Nudeln Numero 1", text: "Nudeln Beschreibung" },
  { id: 1, title: "Nudeln Numero 1", text: "Nudeln Beschreibung" },
  { id: 1, title: "Nudeln Numero 1", text: "Nudeln Beschreibung" },
  ]);

  const swiperOptions = ref({
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  function addCard() {
    const new
  }
  */
</script>

<template>

  <h2 class="WillkommenH2">Willkommen bei JustEnough :-)</h2>
  <!--
  <div class="card-container">
    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <div class="Kochbutton"><router-link to="/RezeptSeite" style="color: #181818">Jetzt kochen!</router-link></div>
    </div>
  </div>
  -->
  <div class="swiper-container">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="card in cards" :key="card.id">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <h2>{{ card.title }}</h2>
          <p>{{ card.text }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <FooterPers/>
</template>


<style>
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

.card-container {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
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

.card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
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

.Kochbutton {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}

.Kochbutton {
  transition: all 0.2s ease-in-out;
}

.Kochbutton:hover {
  transform: scale(1.05);
  cursor: pointer;
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
</style>