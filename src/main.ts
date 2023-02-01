import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import axios from "redaxios";
import type { PostIndex } from "@/types/PostIndex";

const dataPath = "post_store/posts_index.json";

const loadApp = async () => {
  const { data: postsIndex } = await axios.get<PostIndex[]>(dataPath);
  const sections = postsIndex.reduce((prev: string[], { section }) => {
    if (!prev.includes(section)) prev.push(section);
    return prev;
  }, []);

  sections.sort((a, b) => a.localeCompare(b));
  createApp(App)
    .use(router)
    .provide<PostIndex[]>("postsIndex", postsIndex)
    .provide("sections", sections)
    .mount("#app");
};

loadApp();
