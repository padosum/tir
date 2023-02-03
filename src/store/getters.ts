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

  getTags(state: RootState) {
    type Tag = {
      [index: string]: number;
    };

    const tags = state.postItems.reduce((acc: Tag, { tags }) => {
      if (typeof tags !== "undefined") {
        tags.forEach((tag) => {
          acc = acc[tag]
            ? { ...acc, [tag]: acc[tag] + 1 }
            : { ...acc, [tag]: 1 };
        });
      }
      return acc;
    }, {} as Tag);

    const sortedTag = Object.fromEntries(
      Object.entries(tags).sort(([, a]: any, [, b]: any) => b - a)
    );

    return sortedTag;
  },
};

export type Getters = typeof getters;
