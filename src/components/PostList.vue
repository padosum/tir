<template>
  <li>
    <h3>
      <router-link
        :to="'/' + postItem.category + '/' + postItem.filename"
        class="post-link"
      >
        {{ postItem.meta.title }}
      </router-link>
    </h3>
    <span class="post-meta">
      {{ postItem.meta.publishDate.slice(0, 10) }}
    </span>
    <router-link :to="'/' + postItem.category" class="post-category">
      #{{ postItem.category }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      require: true,
    },
  },
}
</script>

<style></style>
