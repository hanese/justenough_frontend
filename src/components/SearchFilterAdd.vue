<script>
export default {
  name: "SearchFilterAdd"
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

    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>

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