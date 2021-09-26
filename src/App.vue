<template>
  <div id="app">
    <!--======= scrolltop =======-->
    <a href="#" class="scrolltop" id="scroll-top">
      <i class="bx bx-chevron-up scrolltop__icon"></i>
    </a>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { scrollTop } from '@/utils/scroll';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  components: {
    NavBar,
    Footer,
  },
  setup() {
    return {};
  },
  mounted() {
    window.addEventListener('scroll', scrollTop);
  },
});
</script>

<style>
@import '~@/assets/style/styles.css';
</style>
