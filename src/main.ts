import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import { PostIndex } from '@/types/PostIndex'
import axios from 'redaxios'

const dataPath = 'post_store/posts_index.json'

const loadApp = async () => {
  const { data: postsIndex } = await axios.get<PostIndex[]>(dataPath)

  createApp(App)
    .use(router)
    .provide<PostIndex[]>('postsIndex', postsIndex)
    .mount('#app')
}

loadApp()
