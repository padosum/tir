<template>
  <main class="l-main">
    <div class="bd-container">
      <div class="title">Tags</div>
      <section class="section">
        <div class="post-tags">
          <a v-for="tag in tags" :key="tag.name" :href="'/tags/' + tag.name">
            {{ tag.name }}
            <sup>{{ tag.count }}</sup>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
    },
  },
}
</script>

<style></style>
