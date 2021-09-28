<template>
  <div id="app">
    <!--======= scrolltop =======-->
    <a @click="topClick" class="scrolltop" id="scroll-top">
      <i class="bx bx-chevron-up scrolltop__icon"></i>
    </a>
    <NavBar :sections="sections"></NavBar>
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>Load...</template>
    </Suspense>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { scrollTop } from '@/utils/scroll';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  components: {
    NavBar,
    Footer,
  },
  setup() {
    const sections = inject('sections', []);
    return { sections };
  },
  methods: {
    topClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    window.addEventListener('scroll', scrollTop);
  },
});
</script>

<style>
@import '~@/assets/style/styles.css';
</style>
