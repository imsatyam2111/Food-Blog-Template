<template>
  <div class="like-btn col-4 col-md-6 text-muted pl-3">
    <span>{{ singleBlog.likes }} </span>
    <i
      class="fas fa-heart fa-lg"
      :class="{ liked: singleBlog.isLiked }"
      v-on:click="
        toggleLike(singleBlog.isLiked);
        updateLikeCounts(singleBlog.isLiked);
      "
    ></i>
  </div>
</template>

<script>
export default {
  name: "Likes",
  props: ["singleBlog"],
  methods: {
    toggleLike: function() {
      this.singleBlog.isLiked = !this.singleBlog.isLiked;
    },
    updateLikeCounts: function() {
      if (this.singleBlog.isLiked === true) {
        this.singleBlog.likes++;
      } else {
        this.singleBlog.likes--;
      }
    }
  }
};
</script>

<style scoped>
.liked {
  color: red;
}
</style>
