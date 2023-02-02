import { getTheme } from "@/utils/theme";

export const state = {
  darkTheme: getTheme() === "dark" || false,
};

export type RootState = typeof state;
