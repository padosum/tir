<template>
  <main class="l-main">
    <section class="section bd-container">
      <div class="contents">
        <h1 class="post-title">
          <span v-if="!hasLink">{{ this.postData.meta.title }}</span>
          <a :href="this.postData.meta.link" target="_blank" v-else>
            {{ this.postData.meta.title }}
            <i class="bx bx-link" v-if="hasLink"></i>
          </a>
        </h1>
        <p class="post-date">
          <i class="bx bx-calendar"></i>
          {{ this.postData.meta.publishDate.slice(0, 10) }}
        </p>
        <div class="post-tags">
          <a v-for="(value, key) in tags" :key="key" :href="'/tags/' + value">
            {{ value }}
          </a>
        </div>
        <div
          v-html="this.postData.content.contents"
          class="markdown-body"
        ></div>
      </div>
      <comment :repo="'padosum/tir'"></comment>
    </section>
  </main>
</template>

<script>
import Comment from '@/components/Comment.vue';
export default {
  components: {
    Comment,
  },
  props: ['postData'],
  data() {
    return {};
  },
  mounted() {},
  computed: {
    hasLink() {
      return this.postData.meta.link !== undefined;
    },
    tags() {
      return this.postData.meta.tags;
    },
  },
};
</script>

<style scoped>
@import '~@/assets/style/github-markdown.css';
@import '~@/assets/style/highlight.scss';
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
