<template>
  <div class="blog-categories mt-5">
    <div class="">
      <!-- Categories Navigation -->
      <div class="categories mb-4">
        <ul>
          <li class="pl-3"><a href="#">All Posts </a></li>
          <li class="pl-3"><a href="#">Vegetarian</a></li>
          <li class="pl-3"><a href="#">Non-Vegetarian</a></li>
        </ul>
      </div>
      <!-- Search Input -->
      <!-- <div class="search col-sm-6">
        <span><i class="fas fa-search float-right"></i></span>
        <input type="text" class="p-1 float-right" placeholder="Search" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul li {
  list-style-type: none;
  display: inline-block;
}
li a {
  color: black;
  text-decoration: none;
}
li a:hover {
  color: #03a5fc;
}
.search input {
  border: none;
  border-bottom: 1px solid rgb(121, 112, 112);
}
</style>
