<template>
  <div class="main">
    <nav-bar></nav-bar>
    <div class="contents">
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
            {{ value.meta.publishDate.slice(0, 10) }}
          </span>
          <router-link :to="'/' + value.category" class="post-category">
            #{{ value.category }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar,
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
<style scoped>
.contents {
  width: 100%;
}
.post-list {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
}
/* unvisited link */
.post-list .post-link {
  color: #654781;
  font-size: 1rem;
  font-weight: 500;
}

/* mouse over link */
.post-list .post-link:hover {
  color: #bb54b5;
}
ul {
  list-style-type: none;
}

.post-meta,
.post-category {
  color: #98969a;
}

.post-category:hover {
  color: #b797c2;
}
</style>
