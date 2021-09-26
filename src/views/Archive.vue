<template>
  <main class="l-main">
    <div class="bd-container archive__container">
      <div class="title">{{ title }}</div>
      <section class="section" v-if="!section">
        <!-- <div class="heatmap">
          <calendar-heatmap
            :values="postsIndex"
            :end-date="today"
            :max="5"
            tooltip-unit="read"
            @day-click="handleDayClick"
          ></calendar-heatmap>
        </div> -->
        <!-- <h3>{{ selectedDate }}</h3>
        <ul class="selected-list">
          <li v-for="(value, key) in selectedList" :key="key">
            <router-link :to="'/' + value.category + '/' + value.filename">
              {{ value.meta.title }}
            </router-link>
          </li>
          <span v-if="!selectedList.length && selectedDate"
            >Nothing 🏀 ⚽ 🎾 🏐
          </span>
        </ul> -->
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
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject, computed } from 'vue';
import { CalendarHeatmap } from 'vue-calendar-heatmap';
import PostList from '@/components/PostList.vue';
import { formatDate } from '@/utils/format';
import { PostIndex } from '@/types/PostIndex';
import paginate from '@/utils/paginate';
const {
  VUE_APP_POSTS_PER_PAGE = 10,
  VUE_APP_MAIN_BG_CSS_COLOR = 'white',
  VUE_APP_MAIN_TEXT_CSS_COLOR = 'black',
} = process.env;

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
  },
  computed: {
    title() {
      return this.section === '' ? 'Today I Read' : this.section;
    },
  },
  methods: {
    handleDayClick(day) {
      // let selected = [];
      // this.data.markdown.forEach((element, index) => {
      //   if (formatDate(element.meta.publishDate) === formatDate(day.date)) {
      //     selected.push(this.data.markdown[index]);
      //   }
      // });
      // this.selectedList = selected;
      // let d = formatDate(day.date);
      // this.selectedDate = `What I Read in ${d}`;
    },
  },
  setup(props) {
    const postsIndex: PostIndex[] = inject<PostIndex[]>('postsIndex', []);
    const state = reactive({
      currentPage: 1,
    });
    const pageStatus = computed(() => {
      const categoryPosts = props.section
        ? postsIndex.filter(({ section }) => section === props.section)
        : postsIndex;
      const { startPage, endPage, startIndex, endIndex } = paginate(
        categoryPosts.length,
        state.currentPage,
        props.section ? VUE_APP_POSTS_PER_PAGE : 50,
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
      VUE_APP_MAIN_BG_CSS_COLOR,
      VUE_APP_MAIN_TEXT_CSS_COLOR,
      postsIndex,
    };
  },
});
</script>
<style scoped>
.heatmap {
  padding: 10px;
}
</style>
