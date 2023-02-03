<template>
  <main class="l-main">
    <article class="bd-container">
      <h1 class="title">Tags</h1>
      <nav class="section">
        <div class="post-tags">
          <router-link
            v-for="(count, tag) in tags"
            :key="tag"
            :to="'/tags/' + tag"
          >
            {{ tag }}
            <sup>{{ count }}</sup>
          </router-link>
        </div>
      </nav>
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      tags: computed(() => store.getters.getTags),
    };
  },
});
</script>

<style></style>
