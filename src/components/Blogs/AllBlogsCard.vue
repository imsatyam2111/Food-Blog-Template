<template>
  <div class="blog-posts">
    <div class="all-posts row mt-4">
      <div class="col-lg-6 mb-4" v-for="post in posts" :key="post.id">
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
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
