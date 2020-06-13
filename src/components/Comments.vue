<template>
  <div class="comment-section p-2">
    <div>
      <h3>Comments</h3>
    </div>
    <div class="readers-comment">
      <p>Readers comments goes here</p>
      <div v-for="eachComment in comments" :key="eachComment.id">
        <div>{{ eachComment.id }}</div>
        <div>{{ eachComment.email }}</div>
        <div>{{ eachComment.comment }}</div>
      </div>
    </div>
    <div class="add-comment">
      <h5>Add a Comment</h5>
      <div class="">
        <form>
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
  props: ["singleBlog"],
  data() {
    return {
      email: "",
      singleComment: "",
      comments: [
        {
          id: 1,
          email: "ss1234@gmail.com",
          comment: "thsi is a comment"
        },
        {
          id: 2,
          email: "skj234@gmail.com",
          comment: "thsi is a comment 2nd"
        },
        {
          id: 3,
          email: "ss12355484@gmail.com",
          comment: "thsi is a comment 3rd"
        },
      ]
    };
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
</style>
