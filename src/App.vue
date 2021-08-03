<template>
  <div id="app">
    <div class="wrapper">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
  name: 'app',
  data() {
    return {}
  },
  computed: {
    categories() {
      let arr = []
      this.data
      return arr
    },
  },
  mounted() {},
}
</script>

<style lang>
@import url('~assets/style/base.scss');
@import url('~assets/style/main.scss');
</style>
