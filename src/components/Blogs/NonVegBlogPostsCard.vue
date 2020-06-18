<template>
  <!-- Non-Veg Category blogs card -->
  <div class="non-veg-blogs row">
    <div class="all-posts row mt-4">
      <!-- Iterate over the non-vegetarian blogs -->
      <div class="col-lg-6 mb-4" v-for="post in blogs" :key="post.id">
        <BlogPostCardTemplate v-bind:post="post" />
      </div>
    </div>
  </div>
</template>
<script>
import BlogPostCardTemplate from "@/components/Blogs/BlogPostCardTemplate.vue";

export default {
  components: {
    BlogPostCardTemplate
  },
  props: ["posts"],
  data() {
    return {
      blogs: {}
    };
  },
  // Filter the posts of non-vegetarian category and assign it to blogs
  created: function() {
    // Assigned posts to blog just to avoid mutating a prop
    this.blogs = this.posts.filter(post => post.category === "non-vegetarian");
  }
};
</script>

<style scoped></style>
