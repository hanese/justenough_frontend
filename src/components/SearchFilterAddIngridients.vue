<script>
export default {
  name: "SearchFilterAddIngridients"
}
</script>

<template>
  <div class="SearchFilterAdd">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Suche"
             aria-label="Recipient's username with two button addons">
      <button class="btn btn-outline-secondary" type="button"><span class="material-symbols-outlined"
                                                                    style="padding-top: 10px">
    search
    </span></button>
      <button class="btn btn-outline-secondary" type="button"><span class="material-symbols-outlined"
                                                                    style="padding-top: 10px">
    add
    </span></button>

      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Filter
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Fleisch</a></li>
        <li><a class="dropdown-item" href="#">Gemüse</a></li>
      </ul>

    </div>
  </div>


</template>


<style scoped>
.SearchFilterAdd {
  padding-top: 10px;
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