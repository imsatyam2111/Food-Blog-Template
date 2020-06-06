<template>
  <!-- Contact Section Starts here -->
  <div class="contact-me">
    <div class="my-5">
      <!-- Header  -->
      <div class="contact-me-header">
        <h3 class="text-center">CONTACT ME</h3>
        <div class="mx-auto mb-5" style="width: 16.5%;">
          <div
            class=""
            style="float: right;width:45%; height: 5px; background-color: black;"
          ></div>
        </div>
      </div>

      <!-- Section Starts here -->
      <div class="row contact-methods">
        <!-- Contact Details -->
        <div class="row col-md-5 mt-2 mx-auto mb-5 contact-detail">
          <!-- Email-Id column -->
          <div class="mail row align-items-center text-center col-sm-12">
            <span class="col-sm-5 col-md-4">
              <i class="far fa-envelope float-sm-right"></i>
            </span>
            <br />
            <p class="col-sm-7 col-md-8 pl-sm-0 pt-sm-3 mail-id">
              theblogger@food.com
            </p>
          </div>

          <!-- Address Column -->
          <div
            class="address bg-primar row align-items-start text-center col-sm-12"
          >
            <span class="col-sm-5 col-md-4">
              <i class="fas fa-map-pin float-sm-right"></i>
            </span>
            <br />
            <p class="col-sm-7 col-md-8 pl-sm-0">
              521 Roberts Street, Church Road, <br />
              Westfield, MA 01085
            </p>
          </div>
        </div>

        <!-- Contact Forms -->
        <div class="bg-warnng col-md-7 contact-form">
          <form>
            <!-- Input Name -->
            <label class="d-block" for="name"
              >Enter Your Name
              <input
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
                class="d-block"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </label>
            <!-- Input Message -->
            <label class="d-block" for="name">Enter Your Message</label>
            <textarea
              class="d-block"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <!-- Input Button -->
            <button class="btn-form my-3 p-2 px-3 d-block " type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input,
textarea {
  width: 100%;
  border: 1.5px solid rgb(121, 112, 112);
  padding: 5px;
}
.fa-map-pin,
.fa-envelope {
  font-size: 48px;
}
@media (max-width: 768px) {
  .fa-map-pin,
  .fa-envelope {
    font-size: 36px;
  }
}
</style>
