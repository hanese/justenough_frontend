<script setup>
  import FooterPers from "@/components/FooterPers.vue";
  import LoginForm from "@/components/LoginForm.vue";
</script>

<template>
  <!--
  <div class="search-container">
    <input type="text" placeholder="Search...">
    <div class="dropdown">
      <ul>
        <li>Result 1</li>
        <li>Result 2</li>
        <li>Result 3</li>
      </ul>
    </div>
  </div>
-->

  <h2 class="WillkommenH2">Willkommen bei JustEnough :-)</h2>
  <div class="card-container">
    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <button>Jetzt kochen</button>
    </div>

    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <button>Jetzt kochen</button>
    </div>

    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <button>Jetzt kochen</button>
    </div>

    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <button>Jetzt kochen</button>
    </div>

    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <button>Jetzt kochen</button>
    </div>

    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <button>Jetzt kochen</button>
    </div>

    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <button>Jetzt kochen</button>
    </div>

    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <button>Jetzt kochen</button>
    </div>

    <div class="card">
      <h2>Nudeln mit Shrimps</h2>
      <p>Leckere Shrimps mit noch leckeren Nudeln</p>
      <button>Jetzt kochen</button>
    </div>
  </div>
  <FooterPers/>
</template>



<style>
body {
  background-color: #f1f1f1;
  padding: 20px;
}

.WillkommenH2 {
  position: relative;
  display: inline-block;
  font-size: 2rem;
  padding: 10px;
  border-radius: 10px;
}

.WillkommenH2::before{
  content: 'Willkommen bei JustEnough';
  position: absolute;
  top: -5px;
  left: -5px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: -1;
  background-color: #cccccc;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.WillkommenH2:hover::before{
  opacity: 1;
}

.WillkommenH2::after{
  content: 'Willkommen bei JustEnough';
  position: absolute;
  bottom: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: 4px;
  background-color: #cccccc;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  box-shadow: 0px 0px 5px #666666;
}

.WillkommenH2:hover::after{
  opacity: 1;
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

.card button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}




.search-container {
  position: relative;
}

input[type="text"] {
  width: 100%;
  height: 50px; /* Hier wird die Höhe der Suchleiste festgelegt */
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
}

.dropdown {
  position: absolute;
  top: 50px; /* Hier wird die Dropdown-Liste unterhalb der Suchleiste positioniert */
  left: 0;
  z-index: 1;
  background-color: #f1f1f1;
  min-width: 200px;
  overflow: auto;
  max-height: 200px;
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