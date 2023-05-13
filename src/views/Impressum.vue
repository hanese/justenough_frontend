<script setup>
import FooterPers from "@/components/FooterPers.vue";
</script>

<template>
  <main class="wrapper">
    <div class="company">
      <h2>JustEnough:</h2>
      <p>Straße und Hausnummer</p>
      <p>Postleitzahl und Ort:</p>
      <p>Land:</p>
      <p>Telefonnummer:</p>
      <p>E-Mail Adresse:</p>
      <p>Vertretung: Hannes Lukas Mick Louis Haaf</p>
      <p>Kurs: TINF21B DHBW Stuttgart</p>
      <p>Fach: Webengineering</p>
    </div>
    <div class="content">
      <h2>Verantwortlich für den Inhalt gemäß nichts</h2>
      <p>Anschrift: Musterstraße Musternummer</p>
      <p>Telefonnummer: 123</p>
      <p>E-Mail Adresse: musterEmail@mail.muster</p>
    </div>
  </main>

  <FooterPers/>
</template>

<style>
.wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

.company, .content {
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 3px 3px #ccc;
}

.company h2, .content h2{
  text-align: center;
}

.company p, .content p{
  margin-bottom: 10px;
  line-height: 1.8;
}

@media screen and (min-width: 768px){
  main{
    display: flex;
    flex-direction: row;
  }

  .company{
    flex: 1;
    margin-right: 20px;
  }

  .content{
    flex: 2;
    margin-left: 20px;
  }
}
</style>