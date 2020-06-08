<template>
  <div id="blog" class="blog mt-5  mx-auto" style="width: 90%;">
    <h3 class="text-center">ALL POSTS</h3>
    <!-- Different Categories in Blog -->
    <BlogCategories />
    <!-- All the Blogs -->
    <keep-alive>
      <BlogPosts v-bind:posts="posts" />
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogCategories from "@/components/Blogs/BlogCategories.vue";
import BlogPosts from "@/components/Blogs/BlogPosts.vue";
export default {
  components: {
    BlogCategories,
    BlogPosts
  },
  props: ["posts"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
