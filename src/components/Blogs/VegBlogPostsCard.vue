<template>
  <div class="veg-blogs row">
    <div class="all-posts row mt-4">
      <!-- Iterate over the vegetarian blogs -->
      <div class="col-lg-6 mb-4" v-for="post in blogs" :key="post.id">
        <div v-if="post.category == 'vegetarian'">
          <BlogPostCardTemplate v-bind:post="post" />
        </div>
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
  // Filter the posts of non-vegetarian category and assign it to blogs
  created: function() {
    // Assigned posts to blog just to avoid mutating a prop
    this.blogs = this.posts.filter(post => post.category === "vegetarian");
  }
};
</script>

<style scoped></style>
