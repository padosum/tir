<template>
  <nav>
    <ul
      class="pagination"
      v-if="pageStatus.pages.length > 1"
      style="cursor: pointer"
    >
      <li
        v-for="(page, index) in pageStatus.pages"
        :key="index"
        class="page-item"
        :class="currentPage == page ? 'active' : ''"
        @click="currentPage = page"
      >
        <a class="page-link">{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { MAX_PAGES, POSTS_PER_PAGE } from "@/constants";
import { MutationTypes } from "@/store/mutations";
import type { PostIndex } from "@/types/PostIndex";
import { defineComponent, computed, ref, type PropType } from "vue";
import { useStore } from "vuex";
import paginate from "@/utils/paginate";

export default defineComponent({
  props: {
    postItems: {
      type: Object as PropType<PostIndex[]>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const currentPage = ref(1);

    const pageStatus = computed(() => {
      const { startIndex, endIndex, pages } = paginate(
        props.postItems.length,
        currentPage.value,
        POSTS_PER_PAGE,
        MAX_PAGES
      );

      store.commit(
        MutationTypes.SET_VISIBLE_POSTS,
        props.postItems.slice(startIndex, endIndex + 1)
      );

      return {
        pages,
      };
    });

    return {
      currentPage,
      pageStatus,
    };
  },
});
</script>

<style scoped></style>
