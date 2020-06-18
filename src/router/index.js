import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "The Food Blogger | Home"
    }
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
    meta: {
      title: "The Food Blogger | Blogs"
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "The Food Blogger | Abouts"
    }
  },
  {
    path: "/single-blog/:PId",
    name: "Single-Blog",
    component: () => import("../components/Single-Blog/singleBlog.vue"),
    meta: {
      title: "The Food Blogger | "
    },
    props: { default: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
router.beforeEach((to, from, next) => {
  /* It will change the title when the router is change*/
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
