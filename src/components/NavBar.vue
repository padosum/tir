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
              class="bx bx-moon change-theme"
              id="theme-button"
              v-on:click="changeTheme"
              ref="themeButton"
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
import { defineComponent, inject, type HtmlHTMLAttributes } from "vue";
import { showMenu, linkAction } from "@/utils/menu";
import { scrollHeader } from "@/utils/scroll";
import type { PostIndex } from "@/types/PostIndex";
import type { PropType } from "vue";

export default defineComponent({
  props: {
    sections: {
      type: Array as PropType<PostIndex[]>,
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
      const themeButton = this.$refs.themeButton as HTMLElement;
      const darkTheme: string = "dark-theme";
      const iconTheme: string = "bx-sun";

      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);

      // change utteraces theme
      const commentTheme =
        localStorage.getItem("selected-theme") === "dark"
          ? "boxy-light"
          : "dark-blue";

      const message = {
        type: "set-theme",
        theme: commentTheme,
      };

      const commentFrame: any = document.querySelector(
        "iframe.utterances-frame"
      );
      if (commentFrame !== null)
        commentFrame.contentWindow.postMessage(message, "https://utteranc.es");

      localStorage.setItem("selected-theme", this.getCurrentTheme(darkTheme));
      localStorage.setItem(
        "selected-icon",
        this.getCurrentIcon(iconTheme, themeButton)
      );
    },
    getCurrentTheme(darkTheme: string) {
      return document.body.classList.contains(darkTheme) ? "dark" : "light";
    },
    getCurrentIcon(iconTheme: string, themeButton: HTMLElement) {
      return themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";
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

    // previously selected theme
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun";

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    if (selectedTheme) {
      document.body.classList[selectedTheme == "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton?.classList[selectedIcon == "bx-moon" ? "add" : "remove"](
        iconTheme
      );
    }
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
