<template>
  <main class="l-main">
    <div class="bd-container archive__container">
      <div class="title">{{ title }}</div>
      <section class="section" v-if="isMain">
        <div class="heatmap">
          <calendar-heatmap
            :values="heatMapData"
            :end-date="today"
            :max="5"
            tooltip-unit="read"
            @day-click="handleDayClick"
          ></calendar-heatmap>
        </div>
        <h3>{{ selectedDate }}</h3>
        <ul class="selected-list">
          <li v-for="(value, key) in selectedList" :key="key">
            <router-link :to="'/' + value.category + '/' + value.filename">
              {{ value.meta.title }}
            </router-link>
          </li>
          <span v-if="!selectedList.length && selectedDate"
            >Nothing 🏀 ⚽ 🎾 🏐
          </span>
        </ul>
      </section>
      <section class="section">
        <h3 v-if="isMain">All</h3>
        <ul class="post-list">
          <post-list
            v-for="postItem in postItems"
            :key="postItem.filepath"
            :postItem="postItem"
          >
          </post-list>
        </ul>
      </section>
    </div>
  </main>
</template>
<script>
import { CalendarHeatmap } from 'vue-calendar-heatmap'
import PostList from '@/components/PostList.vue'
import { formatDate } from '@/utils/format'

export default {
  components: {
    CalendarHeatmap,
    PostList,
  },
  data() {
    return {
      selectedList: [],
      selectedDate: '',
    }
  },
  props: {
    data: {
      type: Object,
    },
    filteredData: {
      type: Array,
    },
    category: {
      type: String,
      default: '',
    },
  },
  computed: {
    title() {
      return this.category === '' ? 'Today I Read' : this.category
    },
    isMain() {
      return this.category === ''
    },
    postItems() {
      if (this.category == '') {
        return this.data.markdown
      } else {
        return this.filteredData
      }
    },
    heatMapData() {
      let meta = this.data.markdown.map(item => {
        return item.meta
      })
      let group = meta.reduce((acc, obj) => {
        let key = formatDate(obj.publishDate)
        let idx = acc.findIndex(x => {
          return x.date === key
        })
        if (idx === -1) {
          acc.push({
            date: key,
            count: 1,
          })
        } else {
          acc[idx].date = key
          acc[idx].count = ++acc[idx].count
        }
        return acc
      }, [])

      return group
    },
    today() {
      var today = new Date()
      var dd = String(today.getDate()).padStart(2, '0')
      var mm = String(today.getMonth() + 1).padStart(2, '0')
      var yyyy = today.getFullYear()

      today = mm + '/' + dd + '/' + yyyy

      return today
    },
  },
  methods: {
    handleDayClick(day) {
      let selected = []
      this.data.markdown.forEach((element, index) => {
        if (formatDate(element.meta.publishDate) === formatDate(day.date)) {
          selected.push(this.data.markdown[index])
        }
      })
      this.selectedList = selected
      let d = formatDate(day.date)
      this.selectedDate = `What I Read in ${d}`
    },
  },
  mounted() {},
}
</script>
<style scoped>
.heatmap {
  padding: 10px;
}
</style>
