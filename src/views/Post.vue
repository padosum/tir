<template>
  <main class="l-main">
    <section class="section bd-container">
      <div class="contents">
        <h1 class="post-title">
          <span v-if="!link">{{ title }}</span>
          <a :href="link" target="_blank" v-else>
            {{ title }}
            <i class="bx bx-link"></i>
          </a>
        </h1>

        <p class="post-date">
          <i class="bx bx-calendar"></i>
          {{ publishDate }}
        </p>
        <div class="post-tags">
          <a v-for="(value, key) in tags" :key="key" :href="'/tags/' + value">
            {{ value }}
          </a>
        </div>
        <div v-html="postHtml" class="markdown-body"></div>
      </div>
      <Comment :repo="'padosum/tir'"></Comment>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { PostIndex } from "@/types/PostIndex";
import Comment from "@/components/Comment.vue";
import axios from "redaxios";
import MarkdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import router from "@/router";

const markDownIt = new MarkdownIt({ html: true }).use(emoji);

// 콘텐츠 링크 태그 target="_blank"로 설정
const defaultRender =
  markDownIt.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

markDownIt.renderer.rules.link_open = function (
  tokens,
  idx,
  options,
  env,
  self
) {
  // If you are sure other plugins can't add `target` - drop check below
  var aIndex = tokens[idx].attrIndex("target");

  if (aIndex < 0) {
    tokens[idx].attrPush(["target", "_blank"]); // add new attribute
  } else {
    tokens[idx].attrs[aIndex][1] = "_blank"; // replace value of existing attr
  }

  // pass token to default renderer.
  return defaultRender(tokens, idx, options, env, self);
};

export default defineComponent({
  components: {
    Comment,
  },
  props: {
    section: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  async setup(props) {
    /* Hacky navigation when a href link is clicked within the compiled html Post */
    // onBeforeRouteUpdate(() => {
    //   location.reload();
    // });

    // fetch post
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
    const {
      url = "",
      title,
      link,
      tags,
      publishDate,
    } = postsIndex.find(({ id }) => id === props.id) || {};

    const { data: markDownSource } = await axios.get(`../${url}`);

    const [, , content] = markDownSource.split("---");
    const postHtml = markDownIt.render(content);

    const hasHistory = () => window.history?.length > 2;

    return {
      hasHistory,
      postHtml,
      router,
      title,
      link,
      tags,
      publishDate,
    };
  },
});
</script>

<style scoped>
@import "~@/assets/style/github-markdown.css";
@import "~@/assets/style/highlight.scss";
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
