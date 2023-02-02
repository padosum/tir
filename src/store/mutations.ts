import type { RootState } from "./state";

export enum MutationTypes {
  TOGGLE_THEME = "TOGGLE_THEME",
}

export const mutations = {
  [MutationTypes.TOGGLE_THEME](state: RootState) {
    state.darkTheme = !state.darkTheme;
  },
};

export type Mutations = typeof mutations;
