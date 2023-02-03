import type { RootState } from "./state";
import type { PostIndex } from "@/types/PostIndex";

export enum MutationTypes {
  TOGGLE_THEME = "TOGGLE_THEME",
  SET_DATE = "SET_DATE",
  SET_ITEMS = "SET_ITEMS",
  SET_VISIBLE_POSTS = "SET_VISIBLE_POSTS",
}

export const mutations = {
  [MutationTypes.TOGGLE_THEME](state: RootState) {
    state.darkTheme = !state.darkTheme;
  },
  [MutationTypes.SET_DATE](state: RootState, newDate: string) {
    state.selectedDate = newDate;
  },
  [MutationTypes.SET_ITEMS](state: RootState, newItems: PostIndex[]) {
    state.postItems = newItems;
  },
  [MutationTypes.SET_VISIBLE_POSTS](state: RootState, newItems: PostIndex[]) {
    state.visiblePostItems = newItems;
  },
};

export type Mutations = typeof mutations;
