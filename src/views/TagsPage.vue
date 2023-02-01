<template>
  <main class="l-main">
    <article class="bd-container">
      <h1 class="title">Tags</h1>
      <nav class="section">
        <div class="post-tags">
          <a v-for="(count, tag) in sortTags" :key="tag" :href="'/tags/' + tag">
            {{ tag }}
            <sup>{{ count }}</sup>
          </a>
        </div>
      </nav>
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import type { PostIndex } from "@/types/PostIndex";

export default defineComponent({
  setup() {
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);

    type ObjType = {
      [index: string]: number;
    };
    const tags = postsIndex.reduce((acc: ObjType, { tags }) => {
      if (typeof tags !== "undefined") {
        tags.forEach((tag) => {
          acc = acc[tag]
            ? { ...acc, [tag]: acc[tag] + 1 }
            : { ...acc, [tag]: 1 };
        });
      }
      return acc;
    }, {} as ObjType);

    const sortTags = Object.fromEntries(
      Object.entries(tags).sort(([, a]: any, [, b]: any) => b - a)
    );
    return {
      sortTags,
    };
  },
});
</script>

<style></style>
