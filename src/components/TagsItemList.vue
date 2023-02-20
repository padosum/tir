<template>
  <div class="post-tags">
    <router-link v-for="(count, tag) in tags" :key="tag" :to="'/tags/' + tag">
      {{ tag }}
      <sup>{{ count }}</sup>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const tags = computed(() => store.getters.getTags);
</script>

<style scoped></style>
