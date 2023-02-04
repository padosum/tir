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

  store.commit(MutationTypes.SET_ITEMS, postsIndex);

  createApp(App).use(router).use(store).mount("#app");
};

loadApp();
