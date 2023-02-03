import type { RootState } from "./state";

export const getters = {
  getPostItemsByDate(state: RootState) {
    return state.postItems.filter(({ publishDate }) => {
      return publishDate === state.selectedDate;
    });
  },

  getHeatmapData(state: RootState) {
    type heatMapDate = {
      date: string;
      count: number;
    };
    return state.postItems.reduce((acc: heatMapDate[], { publishDate }) => {
      const idx = acc.findIndex((x) => x.date === publishDate);
      if (idx === -1) {
        acc.push({ date: publishDate, count: 1 });
      } else {
        acc[idx].count = acc[idx].count + 1;
      }
      return acc;
    }, []);
  },
};

export type Getters = typeof getters;
