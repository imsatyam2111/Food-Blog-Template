<template>
  <div class="singleBlog container mt-5 mb-4">
    <div v-for="singleBlog in posts" :key="singleBlog.id">
      <div v-if="$route.params.PId == singleBlog.id">
        <div class="post-container border p-5 mx-auto w-100">
          <div class="mx-auto" style="width=80%;">
            <div>
              <h1 class="text-center mb-lg-5">
                <strong>{{ singleBlog.title }}</strong>
              </h1>
            </div>
            <div class="text-center">
              <img
                class="img-fluid"
                src="../assets/blogPost/dummy2.jpg"
                alt=""
              />
            </div>
            <div class="mx-auto" style="width:80%">
              <blockquote class="mt-4 mb-3">
                <strong>{{ singleBlog.description }}</strong>
              </blockquote>
              <div class="my-4 text-center" style="font-size:1.8em">
                <b>. . .</b>
              </div>
              <p class="content mt-3">{{ singleBlog.content }}</p>

              <div class="blog-info mt-5 pb-1 pt-2 row">
                <div class="views col-6 text-muted">
                  <span>{{ singleBlog.views }} Views</span>
                </div>
                <div class="category col-6 pr-0">
                  <span class="float-right">{{ singleBlog.category }}</span>
                </div>
              </div>

              <div class="action-bar mt-4 row">
                <div class="like-btn col-sm-6 text-muted">
                  <span>{{ singleBlog.likes }} </span>
                  <i
                    class="fas fa-heart fa-lg"
                    :class="{ liked: singleBlog.isLiked }"
                    v-on:click="
                      toggleLike();
                      updateLikeCounts();
                    "
                  ></i>
                </div>
                <div class="follow-btn  col-sm-6 pr-0">
                  <div class="social-icons float-right">
                    <a href="#"><i class="fab fa-instagram pr-3"></i></a>
                    <a href="#"><i class="fab fa-facebook-f pr-3"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p pr-3"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Single-Blog",
  props: ["posts"],
  data() {
    return {
      title: "details"
    };
  },
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
.singleBlog {
  width: 95%;
}
.content {
  font-size: 18px;
  font-weight: 350;
  line-height: 4vh;
}
.category > span {
  padding: 3px 6px;
  background: rgb(185, 179, 179);
  border-radius: 4px;
  font-weight: 400;
  color: #727379;
}
@media (min-width: 769px) {
  img {
    width: 80%;
    height: 60%;
  }
}
</style>
