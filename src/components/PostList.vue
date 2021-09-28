<template>
  <li>
    <h3>
      <router-link
        :to="'/' + postItem.section + '/' + postItem.id"
        class="post-link"
      >
        {{ postItem.title }}
      </router-link>
    </h3>
    <span class="post-meta">
      {{ postItem.publishDate.slice(0, 10) }}
    </span>
    <router-link :to="'/' + postItem.section" class="post-category">
      #{{ postItem.section }}
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
};
</script>

<style></style>
