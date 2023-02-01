<template>
  <main class="l-main">
    <article class="bd-container archive__container">
      <h1 class="title">{{ title }}</h1>
      <section
        aria-label="날짜별 기록 그래프"
        class="section"
        v-if="!section && !tag"
      >
        <div class="heatmap">
          <CalendarHeatmap
            :values="heatMapData"
            :end-date="today"
            :max="5"
            tooltip-unit="read"
            @day-click="handleDayClick"
          >
          </CalendarHeatmap>
        </div>
        <h3>{{ selectedDate }}</h3>
        <ul class="selected-list" v-if="selectedDate">
          <li v-for="(value, key) in selectedList" :key="key">
            <router-link :to="'/' + value.section + '/' + value.id">
              {{ value.title }}
            </router-link>
          </li>
          <span v-if="!selectedList.length && selectedDate">
            조회된 항목이 없습니다.
          </span>
        </ul>
      </section>
      <article class="section">
        <ul class="post-list">
          <PostList
            v-for="postItem in pageStatus.visiblePosts"
            :key="postItem.id"
            :postItem="postItem"
          >
          </PostList>
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
import PostList from "@/components/PostList.vue";
import paginate from "@/utils/paginate";

type heatmapDate = {
  date: number;
};

export default defineComponent({
  components: {
    CalendarHeatmap,
    PostList,
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
  data() {
    return {
      selectedDate: "",
      selectedList: [] as PostIndex[],
    };
  },
  computed: {
    title() {
      return this.section ? this.section : this.tag ? this.tag : "Today I Read";
    },
    today() {
      const today = new Date();
      const offset = today.getTimezoneOffset() * 60000;
      const dateOffset = new Date(today.getTime() - offset);
      const [date] = dateOffset.toISOString().split("T");
      return date;
    },
  },
  methods: {
    handleDayClick(day: heatmapDate) {
      const d = new Date();

      this.selectedDate = new Date(day.date - d.getTimezoneOffset() * 60000)
        .toISOString()
        .split("T")[0];

      this.selectedList = this.postsIndex.filter(({ publishDate }) => {
        return publishDate === this.selectedDate;
      });

      this.selectedDate = `📖 ${this.selectedDate}`;
    },
  },
  setup(props) {
    const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
    const currentPage = ref(1);

    type heatMapDate = {
      date: string;
      count: number;
    };
    const heatMapData = postsIndex.reduce(
      (acc: heatMapDate[], { publishDate }) => {
        let idx = acc.findIndex((x) => x.date === publishDate);
        if (idx === -1) {
          acc.push({ date: publishDate, count: 1 });
        } else {
          acc[idx].count = acc[idx].count + 1;
        }
        return acc;
      },
      []
    );
    console.log(heatMapData.filter((item) => item.date === "2022-05-23"));

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
        import.meta.env.VITE_APP_POSTS_PER_PAGE
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
      currentPage,
      pageStatus,
      postsIndex,
      heatMapData,
    };
  },
});
</script>
<style scoped>
.heatmap {
  padding: 10px;
}
</style>
