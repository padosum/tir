<template>
  <div>
    <div v-if="category">
      <h1>#{{ category }}</h1>
    </div>
    <div class="contents" v-else>
      <p class="banner">Today I Read</p>
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
    category: {
      type: String,
      default: '',
    },
  },
  computed: {
    mdData() {
      return this.data.markdown
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
