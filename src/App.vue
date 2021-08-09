<template>
  <div id="app">
    <div class="wrapper">
      <session-bar></session-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SessionBar from '@/components/SessionBar.vue'
export default {
  components: {
    SessionBar,
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

.wrapper {
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  background-color: #fbfaf9;
}
</style>
