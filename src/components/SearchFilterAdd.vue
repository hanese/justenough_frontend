<script>
export default {
  name: "SearchFilterAdd"
}
</script>

<template>
  <div class="content">
    <div class="SearchFilterAdd">

      <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
             aria-describedby="search-addon"/>
      <button type="button" class="btn btn-outline-secondary">search</button>
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>

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

.content {
  position: relative;
}
</style>