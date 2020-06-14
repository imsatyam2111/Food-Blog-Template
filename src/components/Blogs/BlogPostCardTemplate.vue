<template>
  <div class="posts">
    <!-- Post Cards -->
    <div class="">
      <div class="card">
        <!-- Card Image -->
        <img
          src="../../assets/blogPost/dummy2.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <!-- Card Blog-Author -->

          <div class="author row align-items-start">
            <!-- Author Avatar -->
            <span class="col-3 col-md-2 mt-1">
              <i class=" fas fa-user-circle fa-2x"></i>
            </span>
            <span class="author-name col-9 col-md-10 b-warning row p-0 pl-1">
              <!-- Author Name -->
              <p class="col-12 m-0 pl-0 pb-0">
                <span>Admin </span> <i class="fas fa-crown"></i>
              </p>
              <!-- Card Blog-Time -->
              <p class="card-text pt-0 pl-0 col-12">
                <small class="text-muted">May 29 | 3 mins ago</small>
              </p>
            </span>
          </div>

          <!-- Card Blog-Titile -->
          <router-link :to="{ name: 'Single-Blog', params: { PId: post.id } }">
            <h4 class="blog-title">{{ post.title }}</h4>
          </router-link>
          <!-- Blog Description -->
          <p class="card-text">
            {{ post.description }}
          </p>
          <!-- Card footer -->
          <div
            class="mx-auto mt-1 mb-3"
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
              <router-link :to="{ name: 'Single-Blog', params: { PId: post.id } }">
                <span class="d-none d-xl-block">Add a comment</span>
                <span class="d-xl-none">
                  <i class="far fa-comment-dots"></i>
                </span>
              </router-link>
            </small>
            <!-- Like Button -->
            <small class="like-btn col-4 text-right text-muted">
              {{ post.likes }}
              <i
                class="fas fa-heart fa-lg"
                :class="{ liked: post.isLiked }"
                v-on:click="toggleLike()"
                v-on="
                  1 == 1
                    ? { click: () => updateLikeCounts() }
                    : { click: $event => $event.preventDefault() }
                "
              ></i>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {};
  },
  methods: {
    toggleLike: function() {
      this.post.isLiked = !this.post.isLiked;
    },

    // Implement like counts
    updateLikeCounts: function() {
      if (this.post.isLiked === true) {
        this.post.likes++;
      } else {
        this.post.likes--;
      }
    }
  }
};
</script>

<style scoped>
.blog-title:hover {
  color: #03a5fc;
}
.card-img-top,
h4.card-title {
  cursor: pointer;
}
.views {
  cursor: default;
}
.comment > span,
.like-btn {
  cursor: pointer;
}
.fa-comment-dots {
  font-size: 1.6em;
}
.liked {
  transition: 0.2s;
  color: red;
}
@media (max-width: 768px) {
  .author-name {
    margin-left: -5.5vw;
  }
}
</style>
