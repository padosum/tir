<template>
  <section aria-label="날짜별 기록 그래프" class="section">
    <CalendarHeatmap
      :values="heatmapData"
      :end-date="today"
      :max="5"
      tooltip-unit="read"
      @day-click="handleDayClick"
      :range-color="heatmapRangeColor"
    />
    <SelectedPostList
      :selected-date="selectedDate"
      :selected-list="postItemsByDate"
    />
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { MutationTypes } from "@/store/mutations";
import { getFormatDate } from "@/utils/date";
import SelectedPostList from "@/components/SelectedPostList.vue";
import { CalendarHeatmap } from "vue3-calendar-heatmap";
import { HEATMAP_DARK_COLORS, HEATMAP_LIGHT_COLORS } from "@/constants";

const store = useStore();

const today = computed(() => {
  return getFormatDate(new Date());
});
const heatmapRangeColor = computed(() => {
  return store.state.darkTheme ? HEATMAP_DARK_COLORS : HEATMAP_LIGHT_COLORS;
});

const handleDayClick = (day: any) => {
  const date = getFormatDate(day.date);
  store.commit(MutationTypes.SET_DATE, date);
};
const heatmapData = computed(() => store.getters.getHeatmapData);
const selectedDate = computed(() => store.state.selectedDate);
const postItemsByDate = computed(() => store.getters.getPostItemsByDate);
</script>

<style scoped></style>
