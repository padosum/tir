import axios from "redaxios";
import MarkdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import { ref, onMounted, inject } from "vue";
import { linkToBlank } from "@/utils/markdown";
import type { PostIndex } from "@/types/PostIndex";

export default function usePost({ postId }: { postId: string }) {
  const postHtml = ref<string>("");
  const postsIndex: PostIndex[] = inject<PostIndex[]>("postsIndex", []);
  const markDownIt = new MarkdownIt({ html: true }).use(emoji);

  linkToBlank(markDownIt);

  const { url, title, link, tags, publishDate } =
    postsIndex.find(({ id }) => id === postId) || {};

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
