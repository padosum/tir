import SelectedPostList from "@/components/SelectedPostList.vue";
import { describe, test, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import type { VueWrapper } from "@vue/test-utils";

describe("SelectedPostList", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(SelectedPostList, {
      props: {
        selectedDate: "2023-02-03",
        selectedList: [],
      },
    });
  });

  test("선택된 날짜가 있으면 post 목록을 보여준다.", () => {
    const list = wrapper.find("ul");
    expect(list.exists()).toBeTruthy();
  });

  test("선택된 날짜의 post가 없으면 '조회된 항목이 없습니다' 메시지를 보여준다.", () => {
    const message = wrapper.find(".message");
    expect(message.text()).toBe("조회된 항목이 없습니다.");
  });
});
