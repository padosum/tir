<template>
  <PostView :postItem="{ title, link, tags, publishDate, postHtml }"></PostView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostView from "@/components/PostView.vue";
import usePost from "@/hooks/usePost";

export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  components: {
    PostView,
  },
  setup(props) {
    const { title, link, postHtml, publishDate, tags } = usePost({
      postId: props.id,
    });

    return {
      title,
      link,
      tags,
      publishDate,
      postHtml,
    };
  },
});
</script>

<style scoped>
@import "@/assets/style/github-markdown.css";
@import "@/assets/style/highlight.scss";
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
