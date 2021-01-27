<template>
  <div>
    <!-- Loop in the posts and show post on homepage -->
    <div v-for="( post, index ) in posts" :key="post._id">
      <!-- Show only 4 posts on the homepage -->
      <div v-if="index < 4">
        <HomePostCardTemplate :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import HomePostCardTemplate from "@/components/Home/HomePostCardTemplate";

export default {
  components: {
    HomePostCardTemplate
  },
  props: ["posts"]
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
