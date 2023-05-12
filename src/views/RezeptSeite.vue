<script>
export default {
  data(){
    return {
      topics: ['Pommestitel'],
      ingredients: ['250g Pommes', '200g mehr Pommes', '150g Pommes', 'Hannes'],
      descriptions: ['Hier steht dann wie das Rezept gekocht werden soll. Pommes mit Pommes und dazu Pommes.']
    };
  },
};
</script>

<template>

    <h1 class="TopicFood" v-for="topic in topics" :key="topic">{{ topic }}</h1>
    <hr class="footer_divider">
    <h3>Zutaten</h3>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
    </ul>
    <hr class="footer_divider">

  <FooterPers/>
</template>

<style>
.TopicFood{
  text-align: left;
  margin-top: 30px;
}

.footer_divider {
  border-top: 1px solid #666666;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>