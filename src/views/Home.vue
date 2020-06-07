<template>
  <div class="home" id="home">
    <!-- Home Header -->
    <h3 class="mt-5 md-3 text-center">RECENT BLOGS</h3>

    <!-- Display Recents on the Home -->
    <HomePost
      v-bind:posts="posts"
      :likeCount="likeCount"
      v-on:like-count="countLike($event)"
    />

    <!-- Button to explore more posts -->
    <div class="go-to-blogs text-right mx-auto mb-5">
      <a class="link" href="/blog">
        <button class="py-2 px-3 ">See More</button>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePost from "@/components/Home/HomePost.vue";

export default {
  name: "Home",
  components: {
    HomePost
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
.home h3 {
  letter-spacing: 0.2vw;
}
.go-to-blogs {
  width: 90%;
}
.go-to-blogs a button {
  background: #472f99;
  color: #fff;
  border: 2px solid #472f99;
  transition: 0.4s;
  cursor: pointer;
}
.go-to-blogs a button:hover {
  background: white;
  color: #000;
  border: 2px solid #472f99;
}
</style>
