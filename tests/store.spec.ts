import { describe, expect, test } from "vitest";
import { mutations, MutationTypes } from "@/store/mutations";

describe("mutations", () => {
  test("TOGGLE_THEME", () => {
    const state = {
      darkTheme: false,
    };

    mutations[MutationTypes.TOGGLE_THEME](state);
    expect(state.darkTheme).toBeTruthy();
  });
});
