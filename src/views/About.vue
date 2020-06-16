<template>
  <div class="about mx-auto mt-5" style="width: 90%;">
    <AboutMe />
    <ContactMe />
  </div>
</template>

<script>
import AboutMe from "@/components/About/AboutMe.vue";
import ContactMe from "@/components/About/ContactMe.vue";
export default {
  components: {
    AboutMe,
    ContactMe
  },
  props: ["Hell"]
};
</script>

<style scoped></style>
