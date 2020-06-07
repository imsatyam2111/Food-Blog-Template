<template>
  <div>
    <!-- Loop in the posts and show post on homepage -->
    <div v-for="post in posts" :key="post.id">
      <!-- Show only 4 posts on the homepage -->
      <div v-if="post.id <= 4">
        <HomePostTemplate
          :post="post"
          :likeCount="likeCount"
          v-on:like-count="countLike($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomePostTemplate from "@/components/Home/HomePostTemplate";

export default {
  components: {
    HomePostTemplate
  },
  props: ["posts", "likeCount"],
  methods: {
    countLike: function(count) {
      let counts = count;
      this.$emit("like-count", counts);
    }
  }
};
</script>

<style scoped>
.homepage-posts {
  width: 90%;
}
.card-body {
  width: 80%;
}
.card-body h4:hover {
  color: #03a5fc;
}
.views {
  cursor: default;
}
.comment > span,
.like-btn {
  cursor: pointer;
}
.liked {
  transition: 0.2s;
  color: red;
}
</style>
