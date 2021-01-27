<template>
  <!-- Each Single BLog  -->
  <div id="singleBlog" class="singleBlog container mt-5 mb-4">
    <!-- Iterating over the posts -->
    <div class="" v-for="singleBlog in posts" :key="singleBlog._id">
      <!-- Check if the id of route and blog is same or not -->
      <div v-if="$route.params.PId == singleBlog._id">
        <!-- Post container starts here -->
        <div class="post-container border p-lg-5 mx-auto w-100">
          <div class="mx-auto" style="width=80%;">
            <!-- Post Title -->

            <div>
              <h1 class="text-center mt-2 mb-3 mt-lg-0 mb-lg-5">
                <strong>{{ singleBlog.title }}</strong>
              </h1>
            </div>

            <div class="text-center">
              <img
                class="img-fluid"
                src="../../assets/blogPost/dummy2.jpg"
                alt=""
              />
            </div>

            <div class="content-container mx-auto">
              <blockquote class="mt-4 mb-3">
                <strong>{{ singleBlog.description }}</strong>
              </blockquote>
              <div class="my-4 text-center" style="font-size:1.8em">
                <b>. . .</b>
              </div>
              <p class="content mt-3">{{ singleBlog.content }}</p>

              <div
                class="mt-5"
                style="height:0.1px; background: #727379;"
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
                <!-- Likes Component -->
                <Likes v-bind:singleBlog="singleBlog" />

                <!-- Follow links -->
                <div class="follow-btn mb-4 mb-lg-0 col-8 col-md-6 pr-3">
                  <div class="social-icons float-right">
                    <a href="#"
                      ><i class="fab fa-instagram pr-3 pr-md-4"></i
                    ></a>
                    <a href="#"
                      ><i class="fab fa-facebook-f pr-3 pr-md-4 pl-md-2"></i
                    ></a>
                    <a href="#"
                      ><i class="fab fa-pinterest-p pr-3 pr-md-4 pl-md-2"></i
                    ></a>
                    <a href="#"><i class="fab fa-twitter pl-md-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Comments components -->
    <div class="comments mt-4">
      <keep-alive>
        <Comments />
      </keep-alive>
    </div>
  </div>
</template>

<script>
// @ is an alias to src/
import Likes from "@/components/Single-Blog/Likes.vue";
import Comments from "@/components/Single-Blog/Comments.vue";

export default {
  name: "Single-Blog",
  components: {
    Likes,
    Comments
  },
  props: ["posts"],
  data() {
    return {
      tit: "he world"
    };
  },
  created() {
    // Dynamically name the Tab as of Blog's Name
    for (let i = 0; i < this.posts.length; i++) {
      if (this.$route.params.PId == i) {
        for (var x in this.posts[i]) {
          if (x == "title") {
            this.$route.meta.title = "The Food Blooger | " + this.posts[i][x];
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.singleBlog {
  width: 95%;
}
@media (max-width: 426px) {
  .singleBlog {
    width: 100%;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
.content-container {
  width: 80%;
}
@media (max-width: 426px) {
  .content-container {
    width: 90%;
  }
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
