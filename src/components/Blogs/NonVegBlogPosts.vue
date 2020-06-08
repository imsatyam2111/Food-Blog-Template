<template>
  <div class="non-veg-blogs row">
    <div class="col-md-6" v-for="post in posts" v-bind:key="post.id">
      <div v-if="post.category == 'non-veg'">
        <BlogPostTemplate v-bind:post="post" />
      </div>
    </div>
  </div>
</template>
<script>
import BlogPostTemplate from "@/components/Blogs/BlogPostTemplate.vue";

export default {
  components: {
    BlogPostTemplate
  },
  props: ["posts"]
};
</script>

<style scoped></style>
