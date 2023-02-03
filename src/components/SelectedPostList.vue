<template>
  <template v-if="selectedDate">
    <h3>{{ title }}</h3>
    <ul class="selected-list">
      <li v-for="(value, key) in selectedList" :key="key">
        <router-link :to="'/' + value.section + '/' + value.id">
          {{ value.title }}
        </router-link>
      </li>
      <span class="message" v-if="!postExists"> 조회된 항목이 없습니다. </span>
    </ul>
  </template>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";
import type { PostIndex } from "@/types/PostIndex";

export default defineComponent({
  props: {
    selectedDate: String,
    selectedList: {
      type: Array as PropType<PostIndex[]>,
      required: true,
    },
  },
  setup(props) {
    const postExists = computed(() => {
      return props.selectedList.length > 0;
    });

    const title = computed(() => {
      return `📖 ${props.selectedDate}`;
    });

    return {
      title,
      postExists,
    };
  },
});
</script>

<style scoped></style>
