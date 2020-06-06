<template>
  <!-- Main Header  -->
  <div class="container-fluid p-0">
    <!-- Slogan -->
    <div class="slogan-box">
      <h1 class="slogan-text">THE FOOD BLOGGER</h1>
    </div>
    <!-- Banner Image -->
    <img
      class="img-fluid"
      src="../../assets/HeaderImage/img-header4.jpg"
      alt="HeaderImage"
    />
  </div>
</template>

<script scoped>
export default {
  name: ""
};
</script>

<style scoped>
.slogan-box {
  position: relative;
  text-align: center;
  margin-bottom: -6vh;
  cursor: pointer;
}

.slogan-text {
  display: inline-block;
  letter-spacing: 0.2em;
  color: #000;
  background-color: #fff;
  border: 5px solid #000;
  font-weight: bold;
  font-size: 3vw;
  padding: 16px;
}
.img-fluid {
  position: relative;
  z-index: -1;
}
@media (max-width: 426px) {
  .slogan-box {
    margin-bottom: -4vh;
  }
  .slogan-text {
    font-size: 4.5vw;
    letter-spacing: 0.1em;
  }
}
@media screen and (min-width: 768px) {
  .container-fluid {
    width: 90%;
  }
}
</style>
