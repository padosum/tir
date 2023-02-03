<template>
  <article class="bd-container">
    <h1 class="title">Tags</h1>
    <nav class="section">
      <TagsItemList />
    </nav>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagsItemList from "@/components/TagsItemList.vue";

export default defineComponent({
  components: {
    TagsItemList,
  },
  setup() {},
});
</script>

<style></style>
