<template>
  <main class="l-main">
    <div class="bd-container">
      <div class="title">{{ this.tag }}</div>
      <section class="section">
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
import PostList from '@/components/PostList.vue'
export default {
  components: {
    PostList,
  },
  props: {
    filteredData: {
      type: Array,
    },
    tag: {
      type: String,
    },
  },
  computed: {
    postItems() {
      return this.filteredData
    },
  },
}
</script>

<style></style>
