<template>
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <router-link to="/" class="nav__logo">
        <i class="bx bx-book-bookmark"></i> TIR
      </router-link>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li v-for="section of sections" :key="section.id" class="nav__item">
            <router-link
              :to="`/${section}`"
              class="nav__link"
              exact-active-class="selected"
              >{{ section }}</router-link
            >
          </li>
          <li class="tools">
            <i class="bx bx-purchase-tag-alt tags" @click="routeTagsPage"></i>
          </li>
          <li class="tools">
            <i class="bx bx-dice-3 random" @click="randomPage"></i>
          </li>
          <li class="tools">
            <i
              class="bx change-theme"
              id="theme-button"
              v-on:click="changeTheme"
              ref="themeButton"
              :class="themeIcon"
            ></i>
          </li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-menu"></i>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { showMenu, linkAction } from "@/utils/menu";
import { scrollHeader } from "@/utils/scroll";
import type { PostIndex } from "@/types/PostIndex";
import type { PropType } from "vue";
import { MutationTypes } from "@/store/mutations";
import { setTheme } from "@/utils/theme";

export default defineComponent({
  props: {
    sections: {
      type: Array as PropType<PostIndex[]>,
    },
  },
  computed: {
    themeIcon() {
      return this.$store.state.darkTheme ? "bx-sun" : "bx-moon";
    },
    theme() {
      return this.$store.state.darkTheme ? "dark" : "light";
    },
  },
  methods: {
    routeTagsPage() {
      this.$router.push(`/tags`);
    },
    randomPage() {
      const { section, id } =
        this.postsIndex[Math.floor(Math.random() * this.postsIndex.length)];

      this.$router.push(`/${section}/${id}`);
    },
    changeTheme() {
      this.$store.commit(MutationTypes.TOGGLE_THEME);
      setTheme(this.theme);
    },
  },
  mounted() {
    showMenu("nav-toggle", "nav-menu");

    /*========================= remove menu mobile =================================*/
    const navLink = document.querySelectorAll(".nav__link");
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    const tools = document.querySelectorAll(".tools");
    tools.forEach((n) => n.addEventListener("click", linkAction));

    window.addEventListener("scroll", scrollHeader);
  },
  setup() {
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
    return {
      postsIndex,
    };
  },
});
</script>

<style></style>
