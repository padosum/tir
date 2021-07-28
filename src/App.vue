<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar },
  name: 'app',
  data() {
    return {}
  },
  mounted() {},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');
@import '~assets/style/reset.css';
@import '~assets/style/common.css';

#app {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
