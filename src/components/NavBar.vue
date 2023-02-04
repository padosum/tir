<template>
  <header class="l-header" id="header" ref="header">
    <nav class="nav bd-container">
      <router-link to="/" class="nav__logo">
        <i class="bx bx-book-bookmark"></i> TIR
      </router-link>
      <div class="nav__menu" id="nav-menu" :class="navMenuClass">
        <ul class="nav__list">
          <li
            v-for="section of sections"
            :key="section.id"
            class="nav__item"
            @click="linkAction"
          >
            <router-link
              :to="`/${section}`"
              class="nav__link"
              exact-active-class="selected"
              >{{ section }}</router-link
            >
          </li>
          <li class="tools" @click="linkAction">
            <i class="bx bx-purchase-tag-alt tags" @click="routeTagsPage"></i>
          </li>
          <li class="tools" @click="linkAction">
            <i class="bx bx-dice-3 random" @click="randomPage"></i>
          </li>
          <li class="tools" @click="linkAction">
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
      <div class="nav__toggle" id="nav-toggle" @click="toggleMenu">
        <i class="bx bx-menu"></i>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import type { PostIndex } from "@/types/PostIndex";
import type { PropType } from "vue";
import { MutationTypes } from "@/store/mutations";
import { setTheme } from "@/utils/theme";
import { useStore } from "vuex";
export default defineComponent({
  props: {
    sections: {
      type: Array as PropType<PostIndex[]>,
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const showMenu = ref(false);
    const header = ref();
    const navMenuClass = computed(() => (showMenu.value ? "show-menu" : ""));

    const theme = computed(() => (store.state.darkTheme ? "dark" : "light"));

    const randomPage = () => {
      const {
        state: { postItems },
      } = store;

      const { section, id } =
        postItems[Math.floor(Math.random() * postItems.length)];
      router.push(`/${section}/${id}`);
    };

    const routeTagsPage = () => {
      router.push(`/tags`);
    };

    const changeTheme = () => {
      store.commit(MutationTypes.TOGGLE_THEME);
      setTheme(theme.value);
    };

    const linkAction = () => {
      showMenu.value = false;
    };

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    const scrollHeader = () => {
      if (window.scrollY >= 200) header.value.classList.add("scroll-header");
      else header.value.classList.remove("scroll-header");
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollHeader);
    });

    onUnmounted(() => {
      window.addEventListener("scroll", scrollHeader);
    });

    return {
      randomPage,
      routeTagsPage,
      changeTheme,
      themeIcon: computed(() => (store.state.darkTheme ? "bx-sun" : "bx-moon")),
      linkAction,
      showMenu,
      navMenuClass,
      toggleMenu,
      header,
    };
  },
});
</script>

<style></style>
