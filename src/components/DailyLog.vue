<template>
  <section aria-label="날짜별 기록 그래프" class="section">
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
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { MutationTypes } from "@/store/mutations";
import { getFormatDate } from "@/utils/date";
import SelectedPostList from "@/components/SelectedPostList.vue";
import { CalendarHeatmap } from "vue3-calendar-heatmap";
import { HEATMAP_DARK_COLORS, HEATMAP_LIGHT_COLORS } from "@/constants";

export default defineComponent({
  components: {
    SelectedPostList,
    CalendarHeatmap,
  },
  setup() {
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

    return {
      today,
      heatmapRangeColor,
      heatmapData: computed(() => store.getters.getHeatmapData),
      selectedDate: computed(() => store.state.selectedDate),
      postItemsByDate: computed(() => store.getters.getPostItemsByDate),
      handleDayClick,
    };
  },
});
</script>

<style scoped></style>
