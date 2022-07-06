<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "./components/common/Navbar.vue";
import Footer from "./components/common/Footer.vue";

export default defineComponent({
  components: { Navbar, Footer },
  setup() {},
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
