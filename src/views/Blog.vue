<template>
  <div id="blog" class="blog mt-5  mx-auto" style="width: 90%;">
    <h3 class="text-center">{{ categoryTitle }}</h3>

    <!-- Blog Categories -->
    <div class="blog-categories mt-5">
      <div class="">
        <!-- Category Navigation -->
        <div class="categories mb-4">
          <ul>
            <li class="pl-3">
              <a href="#" v-on:click="showAll">All Posts </a>
            </li>
            <li class="pl-3">
              <a href="#" v-on:click="showVeg">Vegetarian</a>
            </li>
            <li class="pl-3">
              <a href="#" v-on:click="showNonVeg">Non-Vegetarian</a>
            </li>
          </ul>
        </div>
        <!-- Search Input -->
        <!-- <div class="search col-sm-6">
        <span><i class="fas fa-search float-right"></i></span>
        <input type="text" class="p-1 float-right" placeholder="Search" />
      </div> -->
      </div>
    </div>

    <!-- Blogs Start From Here -->
    <keep-alive>
      <div id="all-posts" v-if="currentTab == 1">
        <AllBlogs v-bind:posts="posts" />
      </div>
      <div id="vegetarian" v-else-if="currentTab == 2">
        <VegBlogPosts v-bind:posts="posts" />
      </div>
      <div id="non-vegetarian" v-else-if="currentTab == 3">
        <NonVegBlogPosts v-bind:posts="posts" />
      </div>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import AllBlogs from "@/components/Blogs/AllBlogs.vue";
import VegBlogPosts from "@/components/Blogs/VegBlogPosts.vue";
import NonVegBlogPosts from "@/components/Blogs/NonVegBlogPosts.vue";

export default {
  components: {
    AllBlogs,
    VegBlogPosts,
    NonVegBlogPosts
  },
  props: ["posts"],
  data() {
    return {
      categoryTitle: "ALL POSTS",
      currentTab: 1
    };
  },
  methods: {
    showAll: function() {
      this.currentTab = 1;
      this.categoryTitle = "ALL POSTS";
    },
    showVeg: function() {
      this.currentTab = 2;
      this.categoryTitle = "VEGAN";
    },
    showNonVeg: function() {
      this.currentTab = 3;
      this.categoryTitle = "NON VEGAN";
    },
  }
};
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
