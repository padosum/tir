<template>
  <header class="session-bar">
    <div class="session-bar-contents">
      <h3 class="logo">TIR</h3>
      <button :v-on="buttonAction">{{ buttonText }}</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      buttonText: 'Login',
      buttonAction: () => {
        console.log('buttonAction')
      },
    }
  },
}
</script>

<style lang="scss" scoped>
$background-grey: #efefef;
$text-light-grey: #9f9f9f;

.session-bar {
  position: inherit;
  background: white;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid $background-grey;
}

.session-bar-contents {
  padding: 0 50px;
  margin: 0 auto;
  max-width: 720px;
  display: flex;
  justify-content: space-between;
  color: grey;
  align-items: center;
}

.session-bar-contents h3 {
  margin: 0 0;
}

.session-bar-contents button {
  color: $text-light-grey;
  display: inline-block;
  border: 1px solid lightgrey;
  font-size: 15px;
  padding: 10px;
  flex-shrink: 0;
}

.session-bar-contents button:hover {
  border-color: $text-light-grey;
  color: grey;
}
</style>
