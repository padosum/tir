<template>
  <main class="l-main">
    <div class="bd-container">
      <div class="title">{{ this.tag }}</div>
      <section class="section">
        <ul class="post-list">
          <post-list
            v-for="postItem in posts"
            :key="postItem.id"
            :postItem="postItem"
          >
          </post-list>
        </ul>
      </section>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import { PostIndex } from '@/types/PostIndex';

import PostList from '@/components/PostList.vue';

export default defineComponent({
  components: {
    PostList,
  },
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const postsIndex: PostIndex[] = inject<PostIndex[]>('postsIndex', []);
    const posts =
      postsIndex.filter(({ tags }) => {
        if (typeof tags !== 'undefined') {
          return tags.includes(props.tag.toString());
        }
      }) || {};
    return {
      posts,
    };
  },
});
</script>

<style></style>
