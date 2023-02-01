import { join, resolve } from "path";
import { writeFileSync, readdirSync, readFileSync } from "fs";
import type { PostIndex } from "@/types/PostIndex";

const YFM = require("yaml-front-matter");

const dataPath = resolve("public", "post_store");
const postsPath = join(dataPath, "docs");

const categoryFolders = readdirSync(postsPath);

const postsIndex: PostIndex[] = [];

for (const categoryFolder of categoryFolders) {
  if (categoryFolder !== "img") {
    const categoryPath = join(postsPath, categoryFolder);
    const postFiles = readdirSync(categoryPath);

    for (const postFile of postFiles) {
      const postPath = join(categoryPath, postFile);
      const postContent = readFileSync(postPath).toString();
      const raw = YFM.loadFront(postContent);
      const [postFileId] = postFile.split(".md");

      delete raw.__content;
      const { title, link, publishDate, tags } = raw;
      const formatDate = publishDate.toISOString().split("T")[0];

      postsIndex.push({
        id: postFileId,
        section: categoryFolder,
        title,
        link,
        publishDate: formatDate,
        tags,
        url: `post_store/docs/${categoryFolder}/${postFile}`,
      });
    }
  }
}

postsIndex.sort(
  (a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate)
);

const indexPath = join(dataPath, "posts_index.json");
writeFileSync(indexPath, JSON.stringify(postsIndex, null, 4));
