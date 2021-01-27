import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// Function to display scroll-to-top button on scroll
const scrollBtn = document.querySelector(".scroll-to-top");

window.onscroll = () => {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// Collapse navigation on clickin the links
const navContainer = document.querySelector(".navbar-collapse");
const navItems = document.querySelector(".navbar-nav");
navItems.addEventListener("click", toggleMenuBtn);

function toggleMenuBtn() {
  navContainer.classList.remove("show");
}
