<template>
  <div class="main">
    <nav-bar></nav-bar>
    <div class="contents">
      <h1>{{ this.postData.meta.title }}</h1>
      <p class="origin-link">
        <a :href="originLink">🔗 {{ originLink }}</a>
      </p>
      <p>{{ this.postData.meta.publishDate.slice(0, 10) }}</p>
      <div v-html="this.postData.content.contents" class="markdown-body"></div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
  props: ['postData'],
  data() {
    return {}
  },
  mounted() {},
  computed: {
    originLink() {
      return this.postData.meta.link
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('~assets/style/markdown.scss');
@import url('~assets/style/highlight.scss');

.contents {
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  font-size: 28px;
  color: #8a4aa9;
}

h6 {
  text-align: center;
  font-size: 12px;
  color: rgba($color: #000000, $alpha: 0.55);
}
.markdown-body {
  margin-top: 80px;
}
.origin-link {
  text-align: center;
}
.origin-link a {
  color: #bb54b5;
}
</style>
