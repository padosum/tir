<template>
  <div>
    <div class="main list-container contents">
      <h1>Today I Read</h1>
      <ul>
        <li v-for="(value, key) in mdData" :key="key">
          {{ value.meta.title }}
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
  },
  computed: {
    mdData() {
      return this.data.markdown
    },
  },
  mounted() {
    console.log(this.mdData)
  },
}
</script>

<style></style>
