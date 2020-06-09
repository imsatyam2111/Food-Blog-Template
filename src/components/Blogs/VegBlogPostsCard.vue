<template>
  <div class="veg-blogs row">
    <div class="col-md-6" v-for="post in posts" v-bind:key="post.id">
      <div v-if="post.category == 'veg'">
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
