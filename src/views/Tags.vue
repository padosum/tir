<template>
  <main class="l-main">
    <div class="bd-container">
      <div class="title">Tags</div>
      <section class="section">
        <div class="post-tags">
          <a v-for="tag in tags" :key="tag.name" :href="'/tags/' + tag.name">
            {{ tag.name }}
            <sup>{{ tag.count }}</sup>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { PostIndex } from '@/types/PostIndex';

const tag = 'Tags';

export default defineComponent({
  setup() {
    const postsIndex: PostIndex[] = inject<PostIndex[]>('postsIndex', []);

    const tags = postsIndex.reduce((acc, obj) => {
      let objTags = obj.tags;
      if (typeof objTags !== 'undefined') {
        objTags.forEach(tag => {
          let idx = acc.findIndex(x => {
            return x.name === tag;
          });
          if (idx === -1) {
            acc.push({
              name: tag,
              count: 1,
            });
          } else {
            acc[idx].name = tag;
            acc[idx].count = ++acc[idx].count;
          }
        });
      }
      return acc;
    }, []);

    tags.sort((a, b) => {
      return b.count - a.count;
    });

    return {
      tags,
    };
  },
});
</script>

<style></style>
