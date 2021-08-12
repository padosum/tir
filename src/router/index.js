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
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/add',
    component: () => import('@/views/PostAdd.vue'),
  },
  {
    path: '/:category?',
    component: () => import('@/views/Archive.vue'),
    props: route => {
      let category = route.params.category
      let filteredData = data.markdown.filter(item => {
        return item.category === category
      })
      return {
        filteredData,
        category,
      }
    },
  },
  {
    path: '/tags/:tag',
    component: () => import('@/views/Tags.vue'),
    props: route => {
      let tag = route.params.tag
      let filteredData = data.markdown.filter(item => {
        if (typeof item.meta.tags !== 'undefined') {
          return item.meta.tags.includes(tag)
        }
      })
      return {
        filteredData,
        tag,
      }
    },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      document.getElementById('app').scrollIntoView()
      return { el: '#app' }
    }
  },
})

export default router
