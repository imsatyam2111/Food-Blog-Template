<template>
  <div class="blog-posts">
    <div class="all-posts row mt-4">
      <div class="col-lg-6 mb-4" v-for="post in posts" :key="post.id">
        <BlogPostTemplate
          v-bind:post="post"
          v-bind:likeCount="likeCount"
          v-on:like-count="countLike"
        />
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
  props: ["posts", "likeCount"],
  data() {
    return {};
  },
  methods: {
    countLike: function(count) {
      //emit like counts from Blog-Post-Template to parent (Blog)
      let counts = count;
      this.$emit("like-count", counts);
    }
  }
};
</script>

<style scoped></style>
