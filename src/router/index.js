import Vue from 'vue'
import VueRouter from 'vue-router'
import data from '../utils/data.html'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Archive.vue'),
    props: {
      data,
    },
  },
  {
    path: '/:category?',
    component: () => import('@/views/Archive.vue'),
    props: true,
  },
  {
    path: '/:category/:post',
    component: () => import('@/views/Post.vue'),
    props: route => {
      let title = route.params.post
      let category = route.params.category
      let pData = data.markdown.find(item => {
        return item.category == category && item.filename == title
      })
      return { postData: pData }
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
