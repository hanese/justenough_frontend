<script setup>
</script>


<template>
  <footer>
    <div class="container">
      <hr class="footer_divider">
      <div class="row">
        <div class="col-md-12">
          <ul class="footer_links text-center">
            <li class="FussButton"><router-link to="/impressum" style="color: #181818">Impressum</router-link></li>
            <li class="FussButton"><router-link to="/impressum" style="color: #181818">Datenschutz</router-link></li>
            <li class="FussButton"><router-link to="/impressum" style="color: #181818">FAQ</router-link></li>
          </ul>
            <p class="text-center">&copy; 2023 JustEnough</p>
            <hr class="footer_divider">
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #f1f1f1;
  padding: 20px 0;
}

.footer_links {
  list-style: none;
  text-align: center;
  margin-bottom: 20px;
  padding-right: 20px;
}

.footer_links li{
  display: inline-block;
  margin-left: 20px;
}

.footer_links li:first-child{
  margin-left: 0;
}

.text-center {
  text-align: center;
}

.footer_divider {
  border-top: 1px solid #666666;
  margin-top: 20px;
  margin-bottom: 20px;
}

.FussButton {
  border: none;
  border-radius: 4px;
}

</style>