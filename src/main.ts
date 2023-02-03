import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { store } from "@/store";
import axios from "redaxios";
import type { PostIndex } from "@/types/PostIndex";
import { MutationTypes } from "@/store/mutations";
const dataPath = "post_store/posts_index.json";

const loadApp = async () => {
  const { data: postsIndex } = await axios.get<PostIndex[]>(dataPath);
  const sections = postsIndex.reduce((prev: string[], { section }) => {
    if (!prev.includes(section)) prev.push(section);
    return prev;
  }, []);

  store.commit(MutationTypes.SET_ITEMS, postsIndex);

  sections.sort((a, b) => a.localeCompare(b));

  createApp(App)
    .use(router)
    .use(store)
    .provide<PostIndex[]>("postsIndex", postsIndex)
    .provide("sections", sections)
    .mount("#app");
};

loadApp();
