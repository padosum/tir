import NavBar from "@/components/NavBar.vue";
import router from "@/router";
import { describe, test, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { store } from "@/store";

describe("NavBar.vue theme 변경", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = shallowMount(NavBar, {
      global: {
        plugins: [store, router],
      },
    });
  });

  test("theme 변경 버튼을 클릭하면 버튼의 theme icon이 변경된다.", () => {
    const themeButton = wrapper.find("#theme-button");
    const beforeTheme = themeButton.attributes("class");
    themeButton.trigger("click");

    expect(themeButton.classes()).not.toBe(beforeTheme);
  });

  test("theme 변경 버튼을 클릭하면 store state 값이 반대로 변경된다.", () => {
    const beforeState = store.state.darkTheme;
    const themeButton = wrapper.find("#theme-button");
    themeButton.trigger("click");

    expect(store.state.darkTheme).not.toEqual(beforeState);
  });
});
