<template>
  <div class="about mx-auto mt-5" style="width: 90%;">
    <h1>{{Hell}}</h1>
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
  },
  props: ["Hell"]
};
</script>

<style scoped>
</style>
