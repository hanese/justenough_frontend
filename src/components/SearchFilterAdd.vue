<script>
export default {
  name: "SearchFilterAdd"
}
</script>

<template>
  <div class="SearchFilterAdd">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Suche" aria-label="Recipient's username with two button addons">
      <button class="btn btn-outline-secondary" type="button">Button</button>
      <button class="btn btn-outline-secondary" type="button">+</button>
    </div>
  </div>


</template>



<style scoped>
.SearchFilterAdd {
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content{
  position: relative;
}


</style>