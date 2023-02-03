import { describe, expect, test } from "vitest";
import { mutations, MutationTypes } from "@/store/mutations";
import { state } from "@/store/state";
import { getters } from "@/store/getters";

describe("state", () => {
  test("selectedDate state의 기본값은 빈 문자열이다.", () => {
    expect(state.selectedDate).toEqual("");
  });

  test("darkTheme state의 기본값은 localStorage에 dark가 담겨져 있으면 true이고 나머지는 false다.", () => {
    const storedValue =
      localStorage.getItem("selected-theme") === "dark" || false;
    expect(state.darkTheme).toEqual(storedValue);
  });
});

describe("mutations", () => {
  test("TOGGLE_THEME", () => {
    const state = {
      darkTheme: false,
      selectedDate: "",
      postItems: [],
    };

    mutations[MutationTypes.TOGGLE_THEME](state);
    expect(state.darkTheme).toBeTruthy();
  });

  test("SET_DATE", () => {
    const state = {
      darkTheme: false,
      selectedDate: "",
      postItems: [],
    };

    const newDate = "2023-02-03";
    mutations[MutationTypes.SET_DATE](state, newDate);
    expect(state.selectedDate).toBe(newDate);
  });

  test("SET_ITEMS", () => {
    const state = {
      darkTheme: false,
      selectedDate: "",
      postItems: [],
    };

    const newItems = [
      {
        id: "id1",
        section: "section1",
        title: "title1",
        link: "link1",
        publishDate: "2022-05-12",
        tags: ["tag1"],
        url: "url",
      },
    ];

    mutations[MutationTypes.SET_ITEMS](state, newItems);
    expect(state.postItems).toBe(newItems);
  });
});

describe("getters", () => {
  const state = {
    darkTheme: false,
    selectedDate: "2022-05-12",
    postItems: [
      {
        id: "id1",
        section: "section1",
        title: "title1",
        link: "link1",
        publishDate: "2022-05-12",
        tags: ["tag1"],
        url: "url",
      },
      {
        id: "id2",
        section: "section2",
        title: "title2",
        link: "link2",
        publishDate: "2022-05-12",
        tags: ["tag2"],
        url: "url",
      },
      {
        id: "id3",
        section: "section3",
        title: "title3",
        link: "link3",
        publishDate: "2022-05-14",
        tags: ["tag3"],
        url: "url",
      },
    ],
  };
  test("getPostItemsByDate", () => {
    expect(getters.getPostItemsByDate(state).length).toEqual(2);
  });
});
