<template>
  <div class="about">
    <!-- About Section start here -->
    <div class="about-me-header">
      <h3 class="text-center">ABOUT ME</h3>
      <div class="mx-auto mb-5" style="width: 16.5%;">
        <div
          class=""
          style="float: right;width:45%; height: 5px; background-color: black;"
        ></div>
      </div>
    </div>
    <!-- About Me starts here  -->
    <div class="row no-gutter about-me-detail mb-4">
      <div class="col-sm-6 col-md-5 col-lg-7 row no-gutter ml-1 pt-2 ">
        <!--Admin's display picture -->
        <div class="col-sm-7 col-md-12 col-lg-8 img-me">
          <img
            class="img-fluid"
            src="../../assets/img_avatar1.png"
            alt="avatar"
            srcset=""
          />
        </div>
        <!-- Blogger's basic detail -->
        <div class="col-sm-5 col-md-12 col-lg-4 my-info">
          <p>
            <span style="color: #2c3e50; font-weight: 600;">Don Joe</span>
            <br />
            <span class="font-weight-light"
              >Blogger, <br />
              Content-Writer
            </span>
          </p>
        </div>
      </div>
      <!-- About blogger in brief -->
      <div class="col-sm-6 col-md-7 col-lg-5 pt-xl-4 details">
        <p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            turpis egestas sed tempus. Lectus mauris ultrices eros in cursus
            turpis. Sit amet cursus sit amet dictum sit amet. Eget egestas purus
            viverra accumsan in. Accumsan lacus vel facilisis volutpat est velit
            egestas dui. Libero justo laoreet sit amet cursus sit amet dictum.
            Egestas sed tempus urna et pharetra pharetra massa massa. Tincidunt
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.about-me-detail {
  color: #292727;
}
.my-info {
  font-size: 14px;
}
@media (min-width: 769px) {
  .details {
    text-align: justify;
    word-spacing: 6px;
    line-height: 1.8em;
  }
}
</style>
