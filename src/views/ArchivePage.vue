<template>
  <main class="l-main">
    <article class="bd-container archive__container">
      <h1 class="title">{{ title }}</h1>
      <section
        aria-label="날짜별 기록 그래프"
        class="section"
        v-if="!section && !tag"
      >
        <CalendarHeatmap
          :values="heatmapData"
          :end-date="today"
          :max="5"
          tooltip-unit="read"
          @day-click="handleDayClick"
          :range-color="heatmapRangeColor"
        >
        </CalendarHeatmap>
        <SelectedPostList
          :selected-date="selectedDate"
          :selected-list="postItemsByDate"
        ></SelectedPostList>
      </section>
      <article class="section">
        <ul class="post-list">
          <PostListItem
            v-for="postItem in pageStatus.visiblePosts"
            :key="postItem.id"
            :postItem="postItem"
          >
          </PostListItem>
        </ul>
      </article>

      <!-- PAGINATION -->
      <nav>
        <ul
          class="pagination"
          v-if="pageStatus.endPage > pageStatus.startPage"
          style="cursor: pointer"
        >
          <li
            class="page-item"
            :class="currentPage == pageStatus.startPage ? 'active' : ''"
            @click="currentPage = pageStatus.startPage"
          >
            <a class="page-link"> {{ pageStatus.startPage }}</a>
          </li>
          <li
            v-for="(page, index) in pageStatus.midPages"
            :key="index"
            class="page-item"
            :class="currentPage == page ? 'active' : ''"
            @click="currentPage = page"
          >
            <a class="page-link">{{ page }}</a>
          </li>
          <li
            class="page-item"
            :class="currentPage == pageStatus.endPage ? 'active' : ''"
            @click="currentPage = pageStatus.endPage"
          >
            <a class="page-link">{{ pageStatus.endPage }}</a>
          </li>
        </ul>
      </nav>
    </article>
  </main>
</template>
<script lang="ts">
import { defineComponent, ref, inject, computed } from "vue";
import type { PostIndex } from "@/types/PostIndex";
import { CalendarHeatmap } from "vue3-calendar-heatmap";
import SelectedPostList from "@/components/SelectedPostList.vue";
import PostListItem from "@/components/PostListItem.vue";
import paginate from "@/utils/paginate";
import { POSTS_PER_PAGE } from "@/constants";
import { getFormatDate } from "@/utils/date";
import { MutationTypes } from "@/store/mutations";
import { useStore } from "vuex";
import { HEATMAP_DARK_COLORS, HEATMAP_LIGHT_COLORS } from "@/constants";

export default defineComponent({
  components: {
    CalendarHeatmap,
    PostListItem,
    SelectedPostList,
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
  methods: {
    handleDayClick(day: any) {
      const date = getFormatDate(day.date);
      this.$store.commit(MutationTypes.SET_DATE, date);
    },
  },
  setup(props) {
    const store = useStore();
    const title = computed(() => {
      return props.section
        ? props.section
        : props.tag
        ? props.tag
        : "Today I Read";
    });

    const today = computed(() => {
      return getFormatDate(new Date());
    });

    const heatmapRangeColor = computed(() => {
      return store.state.darkTheme ? HEATMAP_DARK_COLORS : HEATMAP_LIGHT_COLORS;
    });

    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
    const currentPage = ref(1);

    const pageStatus = computed(() => {
      const isHome = !props.section && !props.tag;
      const categoryPosts = isHome
        ? postsIndex
        : props.section
        ? postsIndex.filter(({ section }) => section === props.section)
        : postsIndex.filter(({ tags }) => {
            if (typeof tags !== "undefined") {
              return tags.includes(props.tag.toString());
            }
          });

      const { startPage, endPage, startIndex, endIndex } = paginate(
        categoryPosts.length,
        currentPage.value,
        POSTS_PER_PAGE
      );

      const prev =
        currentPage.value - 1 >= startPage ? currentPage.value - 1 : 0;
      const next = currentPage.value + 1 <= endPage ? currentPage.value + 1 : 0;
      const midPages = [prev, currentPage.value, next].filter(
        (p) => p > startPage && p < endPage
      );

      const visiblePosts = categoryPosts.slice(startIndex, endIndex + 1);

      return {
        startPage,
        midPages,
        endPage,
        visiblePosts,
      };
    });

    return {
      title,
      heatmapRangeColor,
      currentPage,
      pageStatus,
      postsIndex,
      today,
      selectedDate: computed(() => store.state.selectedDate),
      postItemsByDate: computed(() => store.getters.getPostItemsByDate),
      heatmapData: computed(() => store.getters.getHeatmapData),
    };
  },
});
</script>
<style scoped></style>
