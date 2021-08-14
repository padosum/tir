<template>
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <router-link to="/" class="nav__logo">
        <i class="bx bx-book-bookmark"></i> TIR
      </router-link>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link :to="'/Art'" :class="selectedMenu('Art')"
              >Art</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="'/Business'" :class="selectedMenu('Business')"
              >Business</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="'/Design'" :class="selectedMenu('Design')"
              >Design</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="'/Dev'" :class="selectedMenu('Dev')"
              >Dev</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="'/History'" :class="selectedMenu('History')"
              >History</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="'/Life'" :class="selectedMenu('Life')"
              >Life</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="'/Study'" :class="selectedMenu('Study')"
              >Study</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="'/Technology'" :class="selectedMenu('Technology')"
              >Technology</router-link
            >
          </li>

          <li>
            <i class="bx bx-purchase-tag-alt tags" @click="routeTagsPage"></i>
          </li>
          <li>
            <i
              class="bx bx-moon change-theme"
              id="theme-button"
              v-on:click="changeTheme"
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

<script>
import { showMenu, linkAction } from '@/utils/menu'
import { scrollHeader } from '@/utils/scroll'
export default {
  methods: {
    selectedMenu(name) {
      return this.$route.params.category === name
        ? 'nav__link selected'
        : 'nav__link'
    },
    routeTagsPage() {
      this.$router.push(`/tags`)
    },
    changeTheme() {
      const themeButton = document.getElementById('theme-button')
      const darkTheme = 'dark-theme'
      const iconTheme = 'bx-sun'

      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)

      // change utteraces theme
      const commentTheme =
        localStorage.getItem('selected-theme') === 'dark'
          ? 'boxy-light'
          : 'dark-blue'

      const message = {
        type: 'set-theme',
        theme: commentTheme,
      }

      const commentFrame = document.querySelector('iframe.utterances-frame')
      if (commentFrame !== null)
        commentFrame.contentWindow.postMessage(message, 'https://utteranc.es')

      localStorage.setItem('selected-theme', this.getCurrentTheme(darkTheme))
      localStorage.setItem(
        'selected-icon',
        this.getCurrentIcon(iconTheme, themeButton),
      )
    },
    getCurrentTheme(darkTheme) {
      return document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    },
    getCurrentIcon(iconTheme, themeButton) {
      return themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
    },
  },
  mounted() {
    showMenu('nav-toggle', 'nav-menu')

    /*========================= remove menu mobile =================================*/
    const navLink = document.querySelectorAll('.nav__link')
    navLink.forEach(n => n.addEventListener('click', linkAction))

    window.addEventListener('scroll', scrollHeader)

    // previously selected theme
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    if (selectedTheme) {
      document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](
        darkTheme,
      )
      themeButton.classList[selectedIcon == 'bx-moon' ? 'add' : 'remove'](
        iconTheme,
      )
    }
  },
}
</script>

<style></style>
