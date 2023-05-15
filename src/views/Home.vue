<script setup>
  import FooterPers from "@/components/FooterPers.vue";
  import { ref } from "vue";
  import { GSCarousel } from 'gitart-scroll-carousel';


  const cards = ref([
  { id: 1, title: "Nudeln Numero 1", text: "Nudeln Beschreibung" },
  { id: 2, title: "Nudeln Numero 2", text: "Nudeln Beschreibung" },
  { id: 3, title: "Nudeln Numero 3", text: "Nudeln Beschreibung" },
  { id: 4, title: "Nudeln Numero 4", text: "Nudeln Beschreibung" },
  { id: 5, title: "Nudeln Numero 5", text: "Nudeln Beschreibung" },
  { id: 6, title: "Nudeln Numero 6", text: "Nudeln Beschreibung" },
  { id: 7, title: "Nudeln Numero 7", text: "Nudeln Beschreibung" },
  ]);

</script>

<template>
  <h2 class="WillkommenH2">Willkommen bei JustEnough :-)</h2>

  <div class="carousel">
    <GSCarousel :items="cards" item-gap="16" :items-to-show="4" layout>
      <template #item="{ data }">
        <div class="card">
          <h2>{{ cards.title }}</h2>
          <p>{{ cards.text }}</p>
        </div>
      </template>
    </GSCarousel>
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

.carousel {
  max-width: 100%;
}

</style>