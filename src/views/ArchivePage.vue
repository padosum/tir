<template>
  <article class="bd-container archive__container">
    <h1 class="title">{{ title }}</h1>
    <DailyLog v-if="home"></DailyLog>
    <article class="section">
      <ul class="post-list">
        <PostListItem
          v-for="postItem in visiblePostItems"
          :key="postItem.id"
          :postItem="postItem"
        >
        </PostListItem>
      </ul>
    </article>
    <PaginationList :post-items="postItems"></PaginationList>
  </article>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import PostListItem from "@/components/PostListItem.vue";
import PaginationList from "@/components/PaginationList.vue";
import DailyLog from "@/components/DailyLog.vue";

export default defineComponent({
  components: {
    DailyLog,
    PostListItem,
    PaginationList,
  },
  props: {
    section: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const store = useStore();
    const home = !(props.section || props.tag);
    const title = computed(() => {
      return props.section || props.tag || "Today I Read";
    });

    const postItems = props.section
      ? store.getters.getPostItemsBySection(props.section)
      : props.tag
      ? store.getters.getPostItemsByTag(props.tag)
      : store.state.postItems;

    return {
      home,
      title,
      postItems,
      visiblePostItems: computed(() => store.state.visiblePostItems),
    };
  },
});
</script>
<style scoped></style>
