<template>
  <div :class="themeClass">
    <NavBar :sections="sections" />
    <a @click="topClick" class="scrolltop" id="scroll-top" ref="scrollTopBtn">
      <i class="bx bx-chevron-up scrolltop__icon"></i>
    </a>
    <main class="l-main">
      <router-view :key="$route.fullPath" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from "vue";
import { useStore } from "vuex";

import NavBar from "@/components/NavBar.vue";
import AppFooter from "@/components/AppFooter.vue";

const scrollTopBtn = ref();
const store = useStore();
const sections = computed(() => store.getters.getSections);

const topClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const themeClass = computed(() => (store.state.darkTheme ? "dark-theme" : ""));

const scrollTop = () => {
  if (window.scrollY >= 560) scrollTopBtn.value.classList.add("scroll-top");
  else scrollTopBtn.value.classList.remove("scroll-top");
};

onMounted(() => window.addEventListener("scroll", scrollTop));
onBeforeUnmount(() => window.removeEventListener("scroll", scrollTop));
</script>

<style>
@import "@/assets/style/styles.css";
@import "vue3-calendar-heatmap/dist/style.css";
</style>
