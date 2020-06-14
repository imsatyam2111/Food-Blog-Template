<template>
  <div id="singleBlog" class="singleBlog container mt-5 mb-4">
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

              <div
                style="height:0.1px; background: #727379; margin-top: 80px;"
              ></div>

              <div class="blog-info mb-2 pb-1 pt-2 row align-items-center">
                <div class="views col-6 text-muted pl-3">
                  <span style="font-size: 12px;">{{ singleBlog.views }}</span>
                  <span> views</span>
                </div>

                <div class="category col-6 pr-3">
                  <span class="float-right">{{ singleBlog.category }}</span>
                </div>
              </div>

              <div style="height:1px; background: #727379; "></div>

              <div class="action-bar mt-2 row">
                <div class="like-btn col-sm-6 text-muted pl-3">
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

                <div class="follow-btn  col-sm-6 pr-3">
                  <div class="social-icons float-right">
                    <a href="#"><i class="fab fa-instagram pr-4"></i></a>
                    <a href="#"><i class="fab fa-facebook-f pr-4 pl-2"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p pr-4 pl-2"></i></a>
                    <a href="#"><i class="fab fa-twitter pl-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="comments mt-4">
      <comments v-bind:singleBlog="singleBlog" />
    </div>
  </div>
</template>
<script>
import Comments from "@/components/Comments.vue";

export default {
  name: "Single-Blog",
  components: {
    Comments
  },
  props: ["posts"],
  data() {
    return {};
  },
  methods: {
    toggleLike: function(singleBlog) {
      singleBlog.isLiked = !singleBlog.isLiked;
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
  background: rgb(221, 211, 211);
  border-radius: 4px;
  font-weight: 400;
  color: #727379;
}
.like-btn {
  font-size: 14px;
}
.like-btn > i {
  font-size: 14px;
  padding-left: 2px;
}
.liked {
  color: red;
}
@media (min-width: 769px) {
  img {
    width: 80%;
    height: 60%;
  }
}
</style>
