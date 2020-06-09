<template>
  <div class="non-veg-blogs row">
    <div class="mb-4 col-md-6" v-for="post in posts" v-bind:key="post.id">
      <div v-if="post.category === 'non-veg'">
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
  props: ["posts"]
};
</script>

<style scoped></style>
