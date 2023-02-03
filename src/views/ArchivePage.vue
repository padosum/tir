<template>
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
import { CalendarHeatmap } from "vue3-calendar-heatmap";
import SelectedPostList from "@/components/SelectedPostList.vue";
import PostListItem from "@/components/PostListItem.vue";
import PaginationList from "@/components/PaginationList.vue";
import { MutationTypes } from "@/store/mutations";
import { getFormatDate } from "@/utils/date";
import { HEATMAP_DARK_COLORS, HEATMAP_LIGHT_COLORS } from "@/constants";

export default defineComponent({
  components: {
    CalendarHeatmap,
    PostListItem,
    SelectedPostList,
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
  methods: {
    handleDayClick(day: any) {
      const date = getFormatDate(day.date);
      this.$store.commit(MutationTypes.SET_DATE, date);
    },
  },
  setup(props) {
    const store = useStore();
    const title = computed(() => {
      return props.section || props.tag || "Today I Read";
    });

    const today = computed(() => {
      return getFormatDate(new Date());
    });

    const heatmapRangeColor = computed(() => {
      return store.state.darkTheme ? HEATMAP_DARK_COLORS : HEATMAP_LIGHT_COLORS;
    });

    const postItems = props.section
      ? store.getters.getPostItemsBySection(props.section)
      : props.tag
      ? store.getters.getPostItemsByTag(props.tag)
      : store.state.postItems;

    return {
      title,
      heatmapRangeColor,
      today,
      postItems,
      selectedDate: computed(() => store.state.selectedDate),
      postItemsByDate: computed(() => store.getters.getPostItemsByDate),
      heatmapData: computed(() => store.getters.getHeatmapData),
      visiblePostItems: computed(() => store.state.visiblePostItems),
    };
  },
});
</script>
<style scoped></style>
