<template>
  <div class="blog-posts">
    <div class="all-posts row mt-4">
      <div class="col-lg-6 mb-4" v-for="post in posts" :key="post.id">
        <BlogPostTemplate :post="post" />
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
  props: ["posts", "texts"],
  data() {
    return {
      isCalled: false
    };
  }
};
</script>

<style scoped></style>
