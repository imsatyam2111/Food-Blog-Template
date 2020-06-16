<template>
  <div class="container" style="width: 90%;">
    <!-- Bootstarp Responsive Naviation -->

    <nav class="navbar navbar-expand-lg navbar-light bg-white px-2 mt-4 mb-3">
      <!-- Hamburger Menu Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNavAltMarkup"
      >
        <!-- Routes -->
        <ul class="navbar-nav">
          <router-link class="pr-3 col-xs-12" to="/">Home</router-link>
          <router-link class="pr-3 col-xs-12" to="/blog">Blog</router-link>
          <router-link class="pr-3 col-xs-12" to="/about">About</router-link>
        </ul>

        <!-- Social Navaigation -->
        <div class="navbar-nav">
          <div class="social-icons">
            <a href="#"><i class="fab fa-instagram pr-3"></i></a>
            <a href="#"><i class="fab fa-facebook-f pr-3"></i></a>
            <a href="#"><i class="fab fa-pinterest-p pr-3"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.navbar-nav a {
  color: #2c3e50;
}
.navbar-nav a.router-link-exact-active {
  font-weight: 500;
}
.navbar-nav a:hover {
  color: #123321;
  text-decoration: none;
}
.container {
  padding: 0 !important;
}
.social-icons a {
  color: black;
}
.social-icons a .fa-instagram:hover {
  color: #c13584;
}
.social-icons a .fa-facebook-f:hover {
  color: #00f;
}
.social-icons a .fa-pinterest-p:hover {
  color: #bd081c;
}
.social-icons a .fa-twitter:hover {
  color: #1da1f2;
}
</style>
