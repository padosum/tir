<template>
  <div>
    <p class="banner">{{ category ? category : 'Today I Read' }}</p>
    <div class="contents">
      <ul>
        <li v-for="(value, key) in mdData" :key="key">
          <div class="title">
            <h3>
              <router-link :to="'/' + value.category + '/' + value.filename">
                {{ value.meta.title }}
              </router-link>
            </h3>
          </div>
          <router-link :to="'/' + value.category">
            #{{ value.category }}
          </router-link>
          <span>{{ value.meta.publishDate.slice(0, 10) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped>
.title a {
  font-weight: 600;
}
.banner {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
  display: flex;
  align-items: center;
}
</style>
