<template>
  <article class="section bd-container contents">
    <h1 class="post-title">
      <span v-if="!postItem.link">{{ postItem.title }}</span>
      <a class="post-link" :href="postItem.link" target="_blank" v-else>
        {{ postItem.title }}
        <i class="bx bx-link"></i>
      </a>
    </h1>
    <h6 class="post-date">
      <i class="bx bx-calendar"></i>
      {{ postItem.publishDate }}
    </h6>
    <nav class="post-tags">
      <a
        v-for="(value, idx) in postItem.tags"
        :key="idx"
        :href="'/tags/' + value"
      >
        {{ value }}
      </a>
    </nav>
    <div v-html="postItem.postHtml" class="markdown-body"></div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { PostItem } from "@/types/PostItem";

defineProps({
  postItem: {
    type: Object as PropType<PostItem>,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
