<template>
  <!-- App Starts Here -->
  <div id="main-app" class="container">
    <!-- layout: Main Navigation Component -->
    <NavigationMain />

    <!-- Layout: Header for the page -->
    <Header />

    <!-- route view will display here under the Header component -->
    <router-view
      v-bind:posts="posts"
      :likeCount="likeCount"
      v-on:like-count="updateLikeCount($event)"
    />

    <!-- Subscription for layout -->
    <Subscribe />

    <!-- Button to go to top of the page -->
    <div class="go-to-top p-2">
      <a href="#main-app"><i class="fas fa-angle-up fa-2x"></i></a>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import NavigationMain from "@/components/layout/NavigationMain.vue";
import Subscribe from "@/components/Subscribe.vue";

export default {
  components: {
    NavigationMain,
    Header,
    Subscribe
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          source: "../assets/blogPost/dummy2.jpg",
          title: "Post 1",
          category: "veg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero.",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Vitae nunc sed velit dignissim. Enim blandit volutpat maecenas volutpat blandit. Duis at tellus at urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum velit euismod in pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fringilla ut morbi tincidunt augue interdum. Iaculis nunc sed augue lacus viverra vitae congue eu. Ut faucibus pulvinar elementum integer enim neque volutpat. Pharetra pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor magna eget est lorem ipsum dolor sit amet. Id diam maecenas ultricies mi. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Vitae turpis massa sed elementum tempus egestas. Amet luctus venenatis lectus magna fringilla urna. Imperdiet nulla malesuada pellentesque elit eget. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Viverra nibh cras pulvinar mattis nunc sed. Quisque id diam vel quam elementum pulvinar etiam non quam. Eros in cursus turpis massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Elit duis tristique sollicitudin nibh. Sit amet consectetur adipiscing elit. Mi eget mauris pharetra et ultrices neque ornare. Tempor id eu nisl nunc mi. Rhoncus est pellentesque elit ullamcorper dignissim. Sed felis eget velit aliquet sagittis id consectetur. Dictumst vestibulum rhoncus est pellentesque. Purus in mollis nunc sed id semper risus in. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet luctus venenatis lectus.`
        },
        {
          id: 2,
          source: "../assets/blogPost/dummy2.jpg",
          title: "Post 2",
          category: "non-veg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero.",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Vitae nunc sed velit dignissim. Enim blandit volutpat maecenas volutpat blandit. Duis at tellus at urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum velit euismod in pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fringilla ut morbi tincidunt augue interdum. Iaculis nunc sed augue lacus viverra vitae congue eu. Ut faucibus pulvinar elementum integer enim neque volutpat. Pharetra pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor magna eget est lorem ipsum dolor sit amet. Id diam maecenas ultricies mi. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Vitae turpis massa sed elementum tempus egestas. Amet luctus venenatis lectus magna fringilla urna. Imperdiet nulla malesuada pellentesque elit eget. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Viverra nibh cras pulvinar mattis nunc sed. Quisque id diam vel quam elementum pulvinar etiam non quam. Eros in cursus turpis massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Elit duis tristique sollicitudin nibh. Sit amet consectetur adipiscing elit. Mi eget mauris pharetra et ultrices neque ornare. Tempor id eu nisl nunc mi. Rhoncus est pellentesque elit ullamcorper dignissim. Sed felis eget velit aliquet sagittis id consectetur. Dictumst vestibulum rhoncus est pellentesque. Purus in mollis nunc sed id semper risus in. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet luctus venenatis lectus.`
        },
        {
          id: 3,
          source: "../assets/blogPost/dummy2.jpg",
          title: "Post 3",
          category: "non-veg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero.",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Vitae nunc sed velit dignissim. Enim blandit volutpat maecenas volutpat blandit. Duis at tellus at urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum velit euismod in pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fringilla ut morbi tincidunt augue interdum. Iaculis nunc sed augue lacus viverra vitae congue eu. Ut faucibus pulvinar elementum integer enim neque volutpat. Pharetra pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor magna eget est lorem ipsum dolor sit amet. Id diam maecenas ultricies mi. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Vitae turpis massa sed elementum tempus egestas. Amet luctus venenatis lectus magna fringilla urna. Imperdiet nulla malesuada pellentesque elit eget. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Viverra nibh cras pulvinar mattis nunc sed. Quisque id diam vel quam elementum pulvinar etiam non quam. Eros in cursus turpis massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Elit duis tristique sollicitudin nibh. Sit amet consectetur adipiscing elit. Mi eget mauris pharetra et ultrices neque ornare. Tempor id eu nisl nunc mi. Rhoncus est pellentesque elit ullamcorper dignissim. Sed felis eget velit aliquet sagittis id consectetur. Dictumst vestibulum rhoncus est pellentesque. Purus in mollis nunc sed id semper risus in. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet luctus venenatis lectus.`
        },
        {
          id: 4,
          source: "../assets/blogPost/dummy2.jpg",
          title: "Post 4",
          category: "non-veg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero.",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Vitae nunc sed velit dignissim. Enim blandit volutpat maecenas volutpat blandit. Duis at tellus at urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum velit euismod in pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fringilla ut morbi tincidunt augue interdum. Iaculis nunc sed augue lacus viverra vitae congue eu. Ut faucibus pulvinar elementum integer enim neque volutpat. Pharetra pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor magna eget est lorem ipsum dolor sit amet. Id diam maecenas ultricies mi. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Vitae turpis massa sed elementum tempus egestas. Amet luctus venenatis lectus magna fringilla urna. Imperdiet nulla malesuada pellentesque elit eget. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Viverra nibh cras pulvinar mattis nunc sed. Quisque id diam vel quam elementum pulvinar etiam non quam. Eros in cursus turpis massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Elit duis tristique sollicitudin nibh. Sit amet consectetur adipiscing elit. Mi eget mauris pharetra et ultrices neque ornare. Tempor id eu nisl nunc mi. Rhoncus est pellentesque elit ullamcorper dignissim. Sed felis eget velit aliquet sagittis id consectetur. Dictumst vestibulum rhoncus est pellentesque. Purus in mollis nunc sed id semper risus in. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet luctus venenatis lectus.`
        },
        {
          id: 5,
          source: "../assets/blogPost/dummy2.jpg",
          title: "Post 5",
          category: "veg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero.",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Vitae nunc sed velit dignissim. Enim blandit volutpat maecenas volutpat blandit. Duis at tellus at urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum velit euismod in pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fringilla ut morbi tincidunt augue interdum. Iaculis nunc sed augue lacus viverra vitae congue eu. Ut faucibus pulvinar elementum integer enim neque volutpat. Pharetra pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor magna eget est lorem ipsum dolor sit amet. Id diam maecenas ultricies mi. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Vitae turpis massa sed elementum tempus egestas. Amet luctus venenatis lectus magna fringilla urna. Imperdiet nulla malesuada pellentesque elit eget. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Viverra nibh cras pulvinar mattis nunc sed. Quisque id diam vel quam elementum pulvinar etiam non quam. Eros in cursus turpis massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Elit duis tristique sollicitudin nibh. Sit amet consectetur adipiscing elit. Mi eget mauris pharetra et ultrices neque ornare. Tempor id eu nisl nunc mi. Rhoncus est pellentesque elit ullamcorper dignissim. Sed felis eget velit aliquet sagittis id consectetur. Dictumst vestibulum rhoncus est pellentesque. Purus in mollis nunc sed id semper risus in. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet luctus venenatis lectus.`
        },
        {
          id: 6,
          source: "../assets/blogPost/dummy2.jpg",
          title: "Post 6",
          category: "non-veg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero.",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Vitae nunc sed velit dignissim. Enim blandit volutpat maecenas volutpat blandit. Duis at tellus at urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum velit euismod in pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fringilla ut morbi tincidunt augue interdum. Iaculis nunc sed augue lacus viverra vitae congue eu. Ut faucibus pulvinar elementum integer enim neque volutpat. Pharetra pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor magna eget est lorem ipsum dolor sit amet. Id diam maecenas ultricies mi. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Vitae turpis massa sed elementum tempus egestas. Amet luctus venenatis lectus magna fringilla urna. Imperdiet nulla malesuada pellentesque elit eget. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Viverra nibh cras pulvinar mattis nunc sed. Quisque id diam vel quam elementum pulvinar etiam non quam. Eros in cursus turpis massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Elit duis tristique sollicitudin nibh. Sit amet consectetur adipiscing elit. Mi eget mauris pharetra et ultrices neque ornare. Tempor id eu nisl nunc mi. Rhoncus est pellentesque elit ullamcorper dignissim. Sed felis eget velit aliquet sagittis id consectetur. Dictumst vestibulum rhoncus est pellentesque. Purus in mollis nunc sed id semper risus in. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet luctus venenatis lectus.`
        },
        {
          id: 7,
          source: "../assets/blogPost/dummy2.jpg",
          title: "Post 7",
          category: "veg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero.",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Vitae nunc sed velit dignissim. Enim blandit volutpat maecenas volutpat blandit. Duis at tellus at urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum velit euismod in pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fringilla ut morbi tincidunt augue interdum. Iaculis nunc sed augue lacus viverra vitae congue eu. Ut faucibus pulvinar elementum integer enim neque volutpat. Pharetra pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor magna eget est lorem ipsum dolor sit amet. Id diam maecenas ultricies mi. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Vitae turpis massa sed elementum tempus egestas. Amet luctus venenatis lectus magna fringilla urna. Imperdiet nulla malesuada pellentesque elit eget. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Viverra nibh cras pulvinar mattis nunc sed. Quisque id diam vel quam elementum pulvinar etiam non quam. Eros in cursus turpis massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Elit duis tristique sollicitudin nibh. Sit amet consectetur adipiscing elit. Mi eget mauris pharetra et ultrices neque ornare. Tempor id eu nisl nunc mi. Rhoncus est pellentesque elit ullamcorper dignissim. Sed felis eget velit aliquet sagittis id consectetur. Dictumst vestibulum rhoncus est pellentesque. Purus in mollis nunc sed id semper risus in. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet luctus venenatis lectus.`
        },
        {
          id: 8,
          source: "../assets/blogPost/dummy2.jpg",
          title: "Post 8",
          category: "veg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero.",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Vitae nunc sed velit dignissim. Enim blandit volutpat maecenas volutpat blandit. Duis at tellus at urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum velit euismod in pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fringilla ut morbi tincidunt augue interdum. Iaculis nunc sed augue lacus viverra vitae congue eu. Ut faucibus pulvinar elementum integer enim neque volutpat. Pharetra pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor magna eget est lorem ipsum dolor sit amet. Id diam maecenas ultricies mi. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Vitae turpis massa sed elementum tempus egestas. Amet luctus venenatis lectus magna fringilla urna. Imperdiet nulla malesuada pellentesque elit eget. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Viverra nibh cras pulvinar mattis nunc sed. Quisque id diam vel quam elementum pulvinar etiam non quam. Eros in cursus turpis massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Elit duis tristique sollicitudin nibh. Sit amet consectetur adipiscing elit. Mi eget mauris pharetra et ultrices neque ornare. Tempor id eu nisl nunc mi. Rhoncus est pellentesque elit ullamcorper dignissim. Sed felis eget velit aliquet sagittis id consectetur. Dictumst vestibulum rhoncus est pellentesque. Purus in mollis nunc sed id semper risus in. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet luctus venenatis lectus.`
        },
        {
          id: 9,
          source: "../assets/blogPost/dummy2.jpg",
          title: "Post 9",
          category: "non-veg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero.",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Vitae nunc sed velit dignissim. Enim blandit volutpat maecenas volutpat blandit. Duis at tellus at urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Interdum velit euismod in pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fringilla ut morbi tincidunt augue interdum. Iaculis nunc sed augue lacus viverra vitae congue eu. Ut faucibus pulvinar elementum integer enim neque volutpat. Pharetra pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor magna eget est lorem ipsum dolor sit amet. Id diam maecenas ultricies mi. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Vitae turpis massa sed elementum tempus egestas. Amet luctus venenatis lectus magna fringilla urna. Imperdiet nulla malesuada pellentesque elit eget. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Viverra nibh cras pulvinar mattis nunc sed. Quisque id diam vel quam elementum pulvinar etiam non quam. Eros in cursus turpis massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Elit duis tristique sollicitudin nibh. Sit amet consectetur adipiscing elit. Mi eget mauris pharetra et ultrices neque ornare. Tempor id eu nisl nunc mi. Rhoncus est pellentesque elit ullamcorper dignissim. Sed felis eget velit aliquet sagittis id consectetur. Dictumst vestibulum rhoncus est pellentesque. Purus in mollis nunc sed id semper risus in. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet luctus venenatis lectus.`
        }
      ],
      likeCount: 350
    };
  },
  methods: {
    updateLikeCount: function(count) {
      this.likeCount = count;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* Reset Default link style */
a {
  color: #000;
  text-decoration: none;
}
a:hover {
  color: #000;
  text-decoration: none;
}

input:focus,
textarea:focus {
  background: rgb(240, 230, 230);
  border: 2px solid #000;
  outline: none;
}
input:valid,
textarea:valid {
  border: 2px solid #1d8a1d;
}
.btn-form {
  border: 2px solid #472f99;
  background-color: #472f99;
  color: #fff;
  font-size: 18px;
  transition: 0.4s;
}
.btn-form:hover {
  background: white;
  color: black;
}
/* Reset button focus style */
button:focus {
  outline: none;
}
/* Scroll Button */
div.go-to-top {
  display: none;
  background: #d456a4;
  position: fixed;
  top: 88vh;
  left: 94vw;
  border-radius: 5px;
  -ms-transform: rotate(-15deg); /* IE 9 */
  transform: rotate(-15deg);
  transition: 0.3s;
  box-shadow: 0 8px 15px #000;
}
div.go-to-top:hover {
  transform: rotate(0deg);
  box-shadow: none;
}
@media (max-width: 768px) {
  div.go-to-top {
    left: 93vw;
  }
}
@media (max-width: 512px) {
  div.go-to-top {
    transform: rotate(0);
    left: 88vw;
  }
}
@media (max-width: 376px) {
  div.go-to-top {
    left: 87vw;
  }
}
.go-to-top a {
  text-decoration: none;
  color: #fff;
}
@media (max-width: 512px) {
  .btn-form {
    width: 100%;
  }
}
</style>
