import { getTheme } from "@/utils/theme";
import type { PostIndex } from "@/types/PostIndex";
export const state = {
  darkTheme: getTheme() === "dark" || false,
  selectedDate: "",
  postItems: [] as PostIndex[],
  visiblePostItems: [] as PostIndex[],
};

export type RootState = typeof state;
