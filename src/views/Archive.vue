<template>
  <main class="l-main">
    <div class="bd-container archive__container">
      <div class="title">{{ title }}</div>
      <section class="section" v-if="!section && !tag">
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
      <section class="section">
        <ul class="post-list">
          <post-list
            v-for="postItem in pageStatus.visiblePosts"
            :key="postItem.id"
            :postItem="postItem"
          >
          </post-list>
        </ul>
      </section>

      <!-- PAGINATION -->
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
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject, computed } from 'vue';
import { PostIndex } from '@/types/PostIndex';
import { CalendarHeatmap } from 'vue3-calendar-heatmap';
import PostList from '@/components/PostList.vue';
import paginate from '@/utils/paginate';
const { VUE_APP_POSTS_PER_PAGE } = process.env;

const tag = 'Archive';

export default defineComponent({
  components: {
    CalendarHeatmap,
    PostList,
  },
  props: {
    section: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedDate: '',
      selectedList: [],
    };
  },
  computed: {
    title() {
      return this.section ? this.section : this.tag ? this.tag : 'Today I Read';
    },
    today() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      return `${yyyy}-${mm}-${dd}`;
    },
  },
  methods: {
    handleDayClick(day) {
      const d = new Date();

      this.selectedDate = new Date(day.date - d.getTimezoneOffset() * 60000)
        .toISOString()
        .split('T')[0];

      this.selectedList = this.postsIndex.filter(({ publishDate }) => {
        return publishDate === this.selectedDate;
      });

      this.selectedDate = `📖 ${this.selectedDate}`;
    },
  },
  setup(props) {
    const postsIndex: PostIndex[] = inject<PostIndex[]>('postsIndex', []);
    const state = reactive({
      currentPage: 1,
    });

    const heatMapData = postsIndex.reduce((acc, obj) => {
      const key = obj.publishDate;
      const idx = acc.findIndex(x => {
        return x.date === key;
      });
      if (idx === -1) {
        acc.push({
          date: key,
          count: 1,
        });
      } else {
        acc[idx].date = key;
        acc[idx].count = ++acc[idx].count;
      }
      return acc;
    }, []);

    const pageStatus = computed(() => {
      const isHome = !props.section && !props.tag;
      const categoryPosts = isHome
        ? postsIndex
        : props.section
        ? postsIndex.filter(({ section }) => section === props.section)
        : postsIndex.filter(({ tags }) => {
            if (typeof tags !== 'undefined') {
              return tags.includes(props.tag.toString());
            }
          });

      const { startPage, endPage, startIndex, endIndex } = paginate(
        categoryPosts.length,
        state.currentPage,
        VUE_APP_POSTS_PER_PAGE,
      );

      const prev =
        state.currentPage - 1 >= startPage ? state.currentPage - 1 : 0;
      const next = state.currentPage + 1 <= endPage ? state.currentPage + 1 : 0;
      const midPages = [prev, state.currentPage, next].filter(
        p => p > startPage && p < endPage,
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
      ...toRefs(state),
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
