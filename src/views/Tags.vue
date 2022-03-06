<template>
  <main class="l-main">
    <div class="bd-container">
      <div class="title">Tags</div>
      <section class="section">
        <div class="post-tags">
          <a v-for="(count, tag) in sortTags" :key="tag" :href="'/tags/' + tag">
            {{ tag }}
            <sup>{{ count }}</sup>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { PostIndex } from "@/types/PostIndex";

export default defineComponent({
  setup() {
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);

    const tags = postsIndex.reduce((acc, { tags }) => {
      let prev = acc;
      if (typeof tags !== "undefined") {
        tags.forEach((tag) => {
          prev = prev[tag]
            ? { ...prev, [tag]: prev[tag] + 1 }
            : { ...prev, [tag]: 1 };
        });
      }
      acc = prev;
      return acc;
    }, {});

    const sortTags = Object.fromEntries(
      // eslint-disable-next-line
      Object.entries(tags).sort(([, a]: any, [, b]: any) => b - a)
    );
    return {
      sortTags,
    };
  },
});
</script>

<style></style>
