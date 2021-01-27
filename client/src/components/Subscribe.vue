<template>
  <div class="subscription-footer mx-auto" style="width: 90%">
    <!-- Horizontal Line -->
    <div
      class="mb-5"
      style="height: 1px; width: 100%; background: rgb(121, 112, 112);"
    ></div>
    <div class="subscription-section row mb-5">
      <!--  Subscribe Header -->
      <div class="col-lg-5 subscribe-header">
        <h3 class="text-center">SUBSCRIBE FOR ALERTS</h3>
        <div class="mx-auto mb-5" style="width: 16.5%;">
          <div
            class=""
            style="float: right;width:45%; height: 5px; background-color: black;"
          ></div>
        </div>
      </div>
      <!-- Subscription Main Section -->
      <div class="col-lg-7 subscribe">
        <form class="subscription-form">
          <label class="d-block" for="email"
            >Enter Your Email
            <input
              class="d- w-100 p-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </label>
          <button class="btn-form d-block p-2 " type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>
    <!-- Horizontal Line -->
    <div
      class="mb-4"
      style="height: 1px; width: 100%; background: rgb(121, 112, 112);"
    ></div>
    <!-- Footer: Copyrights -->
    <div class="footer">
      <footer class="text-center mb-4" style="font-size: 12px;">
        &copy;THE FOOD BLOGGER 2020; CREATED BY SATYAM
      </footer>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
@media (max-width: 320px) {
  .subscribe-header h3 {
    font-size: 1.4em;
  }
}
</style>
