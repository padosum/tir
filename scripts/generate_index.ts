import { join, resolve } from 'path'
import { writeFileSync, readdirSync, readFileSync } from 'fs'
const YFM = require('yaml-front-matter')

const dataPath = resolve('public', 'post_store')
const postsPath = join(dataPath, 'docs')

// Get categories
const categoryFolders = readdirSync(postsPath)

// Create posts_index object
const postsIndex = []

for (const categoryFolder of categoryFolders) {
  if (categoryFolder !== 'img') {
    const categoryPath = join(postsPath, categoryFolder)
    const postFiles = readdirSync(categoryPath)

    for (const postFile of postFiles) {
      const postPath = join(categoryPath, postFile)
      const postContent = readFileSync(postPath).toString()
      const raw = YFM.loadFront(postContent)
      const [postFileId] = postFile.split('.md')

      delete raw.__content
      const { title, publishDate, tags } = raw

      postsIndex.push({
        id: postFileId,
        section: categoryFolder,
        title,
        publishDate,
        tags,
        url: `post_store/posts/${categoryFolder}/${postFile}`,
      })
    }
  }
}

postsIndex.sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate))

const indexPath = join(dataPath, 'posts_index.json')
writeFileSync(indexPath, JSON.stringify(postsIndex, null, 4))
