<template>
  <header class="session-bar">
    <div class="session-bar-contents">
      <h3 class="logo">
        <router-link to="/">TIR</router-link>
      </h3>
      <router-link to="/login">로그인</router-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$background-grey: #efefef;
$text-light-grey: #9f9f9f;

.session-bar-contents {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  font-size: 20px;
}
</style>
