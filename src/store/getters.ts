import type { RootState } from "./state";

export const getters = {
  getPostItemsByDate(state: RootState) {
    return state.postItems.filter(({ publishDate }) => {
      return publishDate === state.selectedDate;
    });
  },
};

export type Getters = typeof getters;
