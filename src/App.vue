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

<script>
import { scrollTop } from '@/utils/scroll'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer,
  },
  name: 'app',
  data() {
    return {}
  },
  computed: {},
  mounted() {
    window.addEventListener('scroll', scrollTop)
  },
}
</script>

<style>
@import url('~assets/style/styles.css');
</style>
