<template>
  <!-- Blogs -->
  <!-- BLog Template to show on HomePage -->
  <div class="homepage-posts bg-light mx-auto mt-5 mb-5">
    <div class="">
      <div class="card mb-3">
        <div class="row no-gutters">
          <!-- Blog Descriptive Image -->
          <div class="col-md-6">
            <img
              src="../../assets/blogPost/dummy2.jpg"
              class="card-img"
              alt="dummy post"
            />
          </div>
          <!-- Card Body -->
          <div class="col-md-6">
            <div class="card-body mx-auto">
              <p class="card-title row no-gutters align-items-center">
                <!-- Blog card author -->
                <i class="fas fa-user-circle fa-2x pr-2 col-2"></i>
                <span class="col-10 ">Admin <i class="fas fa-crown"></i></span>
              </p>
              <!-- Blog card Time -->
              <p class="card-text">
                <small class="text-muted">May 29 | 3 mins ago</small>
              </p>
              <!-- Blog Card Heading -->
              <h4>{{ post.title }}</h4>
              <!-- Card Text -->
              <p class="card-text post-description m-0">
                {{ post.description }}
              </p>
              <div
                class="mx-auto mt-3 mt-xl-5"
                style="width:100%; height: 1px; background-color: lightgrey;"
              ></div>
              <div class="row mt-2">
                <!-- blog views -->
                <small class="views col-4 text-left text-muted">
                  <span>1.5k </span>
                  <i class="far fa-eye"></i>
                </small>
                <!-- Add a Comment  -->
                <small class="comment col-4 text-center  text-muted">
                  <span class="d-none d-xl-block">Add a comment</span>
                  <span class="d-xl-none">
                    <i class="far fa-comment-dots"></i>
                  </span>
                </small>
                <!-- Like Button -->
                <small class="like-btn col-4 text-right text-muted">
                  {{ likeCount }}
                  <i
                    class="fas fa-heart fa-lg"
                    :class="{ liked: isLiked }"
                    v-on:click="
                      toggleLike();
                      likeCounter();
                    "
                  ></i>
                </small>
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
  components: {},
  props: ["post", "likeCount"],
  data() {
    return {
      isLiked: false
    };
  },
  methods: {
    toggleLike: function() {
      this.isLiked = !this.isLiked;
    },
    likeCounter: function() {
      var count = this.likeCount;
      console.log(count);
      // count++;
      // console.log(count);
      console.log(count);
      if (this.isLiked === true) {
        count++;
      }
      else {
        count--;
      }
      this.$emit("like-count", count);
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
.card-img {
  cursor: pointer;
}
.card-body h4:hover {
  color: #03a5fc;
  cursor: pointer;
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
@media (min-width: 1024px) {
  .card-title span {
    margin-left: -10px;
  }
}
@media (min-width: 1440px) {
  .card-title span {
    margin-left: -20px;
  }
}
@media (max-width: 426px) {
  .card-title span {
    padding-left: 4px;
  }
}
@media (min-width: 427px) and (max-width: 769px) {
  .card-img {
    height: 275px !important;
  }
  .post-description {
    height: 100px;
    overflow: hidden;
  }
}
</style>
