<template>
  <div :class="themeClass">
    <NavBar :sections="sections"></NavBar>
    <a @click="topClick" class="scrolltop" id="scroll-top">
      <i class="bx bx-chevron-up scrolltop__icon"></i>
    </a>
    <main class="l-main">
      <router-view :key="$route.fullPath" />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { scrollTop } from "@/utils/scroll";
import NavBar from "@/components/NavBar.vue";
import AppFooter from "@/components/AppFooter.vue";
import type { PostIndex } from "@/types/PostIndex";

export default defineComponent({
  components: {
    NavBar,
    AppFooter,
  },
  computed: {
    themeClass() {
      return this.$store.state.darkTheme ? "dark-theme" : "";
    },
  },
  setup() {
    const sections: PostIndex[] = inject("sections", []);
    return { sections };
  },
  methods: {
    topClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", scrollTop);
  },
});
</script>

<style>
@import "@/assets/style/styles.css";
@import "vue3-calendar-heatmap/dist/style.css";
</style>
