import PostView from "@/components/PostView.vue";
import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import type { PostItem } from "@/types/PostItem";

describe("PostView.vue", () => {
  test("post의 link가 있으면 title이 렌더링되고 link가 추가된다.", () => {
    const wrapper = shallowMount(PostView, {
      propsData: {
        postItem: {
          title: "Hello World",
          link: "https://google.com",
        } as PostItem,
      },
    });
    const postLink = wrapper.find(".post-link");
    expect(postLink.attributes("href")).toBe("https://google.com");
    expect(postLink.text()).toBe("Hello World");
  });

  test("post의 link가 없으면 span에 title이 렌더링된다.", () => {
    const wrapper = shallowMount(PostView, {
      propsData: {
        postItem: {
          title: "Hello World",
        } as PostItem,
      },
    });
    const postTitle = wrapper.find(".post-title > span");
    expect(postTitle.text()).toBe("Hello World");
  });
});
