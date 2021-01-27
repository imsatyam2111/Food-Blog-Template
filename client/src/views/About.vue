<template>
  <div class="about mx-auto mt-5" style="width: 90%;">
    <AboutMe />
    <ContactMe />
  </div>
</template>

<script>
import AboutMe from "@/components/about/AboutMe.vue";
import ContactMe from "@/components/about/ContactMe.vue";
export default {
  components: {
    AboutMe,
    ContactMe
  }
};
</script>

<style scoped></style>
