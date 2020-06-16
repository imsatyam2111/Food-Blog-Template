<template>
  <div class="comment-section p-2 mt-5">
    <div class="mt-4 mb-4">
      <h3>Comments</h3>
    </div>
    <div class="readers-comment mb-4">
      <!-- Iterate over the comments -->
      <div v-for="eachComment in comments" :key="eachComment.id">
        <!-- User div -->
        <div class="comment-by row no-gutters align-items-center text-muted">
          <i class="fas fa-user-circle pr-2 col-1 col-md-1"></i>
          <span class="col-11 col-md-11">{{ eachComment.name }}</span>
        </div>
        <!-- comment div -->
        <div class="comment-text mt-2">
          <span>{{ eachComment.comment }}</span>
        </div>
        <br />
      </div>
    </div>
    <!-- Add comment section -->
    <div class="add-comment">
      <h5>Add a Comment</h5>
      <div class="">
        <form class="mt-4" @submit.prevent="addComment">
          <!-- Input name -->
          <label class="d-block" for="name"
            >Enter Your Name
            <input
              v-model="name"
              class="d-block"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </label>
          <!-- Input Email -->
          <label class="d-block" for="email"
            >Enter Your Email
            <input
              v-model="email"
              class="d-block"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </label>
          <!-- Input Message -->
          <label class="d-block" for="name">Enter Your Comment</label>
          <textarea
            v-model="comment"
            class="d-block"
            name="comments"
            id="message"
            cols="30"
            rows="2 "
            placeholder="Comments Here"
            required
            v-on:keyup.enter="addComment"
          ></textarea>
          <!-- Input Button -->
          <button class="btn-form my-3 p-2 px-3 d-block " type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
  data() {
    return {
      id: 4,
      name: "",
      email: "",
      comment: "",
      comments: [
        {
          id: 1,
          email: "ss1234@gmail.com",
          name: "user 1",
          comment: "thsi is a comment"
        },
        {
          id: 2,
          email: "skj234@gmail.com",
          name: "user 2",
          comment: "thsi is a comment 2nd"
        },
        {
          id: 3,
          email: "ss12355484@gmail.com",
          name: "user 3",
          comment: "thsi is a comment 3rd"
        }
      ]
    };
  },
  methods: {
    addComment: function() {
      const newComment = {
        id: this.id,
        email: this.email,
        name: this.name,
        comment: this.comment
      };

      this.comments = [...this.comments, newComment];
      this.id++;
      this.name = "";
      this.email = "";
      this.comment = "";
    }
  }
};
</script>

<style scoped>
input,
textarea {
  width: 50%;
  border: 1.5px solid rgb(121, 112, 112);
  padding: 5px;
}
@media (max-width: 426px) {
  input,
  textarea {
    width: 100%;
  }
}
/* .comment-by {
  color: rgb(175, 160, 160);
} */
.comment-by i.fa-user-circle {
  font-size: 1.7em !important;
}
.comment-by span {
  font-size: 1.2em;
  text-transform: capitalize;
}
@media (min-width: 768px) {
  .comment-by span {
    margin-left: -20px;
  }
}
@media (min-width: 1024px) {
  .comment-by span {
    margin-left: -40px;
  }
}
@media (min-width: 1440px) {
  .comment-by span {
    margin-left: -60px;
  }
}
@media (min-width: 320px) {
  .comment-by span {
    padding-left: 12px;
  }
}
.comment-text {
  margin-left: 35px;
}
input:valid,
textarea:valid {
  border: 2px solid #1d8a1d;
}
</style>
