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
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
