<template>
  <nav>
    <router-link :to="logoLink" class="">📖 TIR</router-link>
  </nav>
</template>

<script>
export default {
  computed: {
    logoLink() {
      return '/'
    },
  },
}
</script>

<style scoped>
nav {
  background-color: #1867c0;
  color: #fff;
  padding: 10px 10px 10px 30px;
  display: flex;
  align-items: center;
}
a {
  color: white;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
</style>
