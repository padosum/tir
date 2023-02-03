<template>
  <div class="post-tags">
    <router-link v-for="(count, tag) in tags" :key="tag" :to="'/tags/' + tag">
      {{ tag }}
      <sup>{{ count }}</sup>
    </router-link>
  </div>
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

<style scoped></style>
