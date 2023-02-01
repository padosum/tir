<template>
  <div ref="comment"></div>
</template>

<script lang="ts">
export default {
  props: {
    repo: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const utterances = document.createElement("script") as HTMLElement;

    let theme = "boxy-light";
    const savedTheme = localStorage.getItem("selected-theme");
    if (savedTheme !== null) {
      theme = savedTheme === "dark" ? "dark-blue" : "boxy-light";
    }

    utterances.setAttribute("type", "text/javascript");
    utterances.setAttribute("async", "async");
    utterances.setAttribute("crossorigin", "anonymous");
    utterances.setAttribute("src", "https://utteranc.es/client.js");
    utterances.setAttribute("issue-term", "pathname");
    utterances.setAttribute("theme", theme);
    utterances.setAttribute("repo", this.repo);

    // script tag 삽입
    (this.$refs.comment as HTMLElement).appendChild(utterances);
  },
};
</script>

<style scoped></style>
