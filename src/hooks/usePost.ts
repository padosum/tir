import axios from "redaxios";
import MarkdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import { ref, onMounted } from "vue";
import { linkToBlank } from "@/utils/markdown";
import { useStore } from "vuex";
import type { RootState } from "@/store/state";

export default function usePost({ postId }: { postId: string }) {
  const store = useStore();
  const { state }: { state: RootState } = store;

  const postHtml = ref<string>("");
  const markDownIt = new MarkdownIt({ html: true }).use(emoji);

  linkToBlank(markDownIt);

  const { url, title, link, tags, publishDate } =
    state.postItems.find(({ id }) => id === postId) || {};

  onMounted(async () => {
    const { data: markDownSource } = await axios.get(`../${url}`);
    const [, , content] = markDownSource.split("---");
    postHtml.value = markDownIt.render(content);
  });

  return {
    title,
    link,
    tags,
    publishDate,
    postHtml,
  };
}
