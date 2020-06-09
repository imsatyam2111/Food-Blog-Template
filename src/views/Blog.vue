<template>
  <div id="blog" class="blog mt-5  mx-auto" style="width: 90%;">
    <h3 class="text-center">{{ categoryTitle }}</h3>

    <!-- Blog Categories -->
    <div class="blog-categories mt-5">
      <div class="">
        <!-- Category Navigation -->
        <div id="blog-category" class="categories mb-4">
          <ul>
            <li class="pl-3">
              <a href="/blog#all-posts" v-on:click="showAll">All Posts </a>
            </li>
            <li class="pl-3">
              <a href="/blog#vegetarian" v-on:click="showVeg">Vegetarian</a>
            </li>
            <li class="pl-3">
              <a href="/blog#non-vegetarian" v-on:click="showNonVeg">
                Non-Vegetarian
              </a>
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
    <!-- Do not re-render components -->
    <keep-alive>
      <transition name="fade" mode="out-in">
        <div id="all-posts" v-if="currentTab == 1" key="1">
          <AllBlogsCard v-bind:posts="posts" />
        </div>
        <div id="vegetarian" v-else-if="currentTab == 2" key="2">
          <VegBlogPostsCard v-bind:posts="posts" />
        </div>
        <div id="non-vegetarian" v-else-if="currentTab == 3" key="3">
          <NonVegBlogPostsCard v-bind:posts="posts" />
        </div>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import AllBlogsCard from "@/components/Blogs/AllBlogsCard.vue";
import VegBlogPostsCard from "@/components/Blogs/VegBlogPostsCard.vue";
import NonVegBlogPostsCard from "@/components/Blogs/NonVegBlogPostsCard.vue";

export default {
  components: {
    AllBlogsCard,
    VegBlogPostsCard,
    NonVegBlogPostsCard
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
    }
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
