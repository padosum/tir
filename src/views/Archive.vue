<template>
  <div class="main">
    <session-bar></session-bar>
    <div class="content">
      <ul class="post-list">
        <li v-for="(value, key) in mdData" :key="key">
          <h3>
            <router-link
              :to="'/' + value.category + '/' + value.filename"
              class="post-link"
            >
              {{ value.meta.title }}
            </router-link>
          </h3>
          <span class="post-meta">
            <span>{{ value.meta.publishDate.slice(0, 10) }}</span>
          </span>
          <router-link :to="'/' + value.category">
            #{{ value.category }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SessionBar from '@/components/SessionBar.vue'
export default {
  components: {
    SessionBar,
  },
  props: {
    data: {
      type: Object,
    },
    filtedData: {
      type: Array,
    },
    category: {
      type: String,
      default: '',
    },
  },
  computed: {
    mdData() {
      if (this.category == '') {
        return this.data.markdown
      } else {
        return this.filtedData
      }
    },
  },
  mounted() {},
}
</script>

<style></style>
