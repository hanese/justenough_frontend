<script setup>
</script>

<template>
  <main>
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
  <footer>
  </footer>
</template>

<style>

header {
  background-color: #f1f1f1;
  color: #181818;
  padding: 10px;
  text-align: center;
}

.company {
  margin-bottom: 20px;
  line-height: 1.8;
}

.company h2{
  margin-top: 20px;
}

.content h2{
  margin-top: 30px;
  margin-bottom: 20px;
}

.content p{
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 1.8;
}

footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

@media screen and (min-width: 768px){
  main{
    display: flex;
    flex-direction: row;
  }

  .company {
    flex: 1;
    margin-right: 20px;
  }

  .content {
    flex: 2;
  }
}

</style>