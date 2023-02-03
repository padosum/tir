<template>
  <li>
    <h3>
      <router-link
        :to="'/' + postItem.section + '/' + postItem.id"
        class="post-link"
      >
        {{ postItem.title }}
      </router-link>
    </h3>
    <span class="post-meta">
      {{ postItem.publishDate.slice(0, 10) }}
    </span>
    <router-link :to="'/' + postItem.section" class="post-category">
      #{{ postItem.section }}
    </router-link>
  </li>
</template>

<script lang="ts">
import type { PostIndex } from "@/types/PostIndex";
import type { PropType } from "vue";

export default {
  props: {
    postItem: {
      type: Object as PropType<PostIndex>,
      required: true,
    },
  },
};
</script>

<style></style>
