<template>
  <div ref="comment"></div>
</template>

<script>
export default {
  mounted() {
    const utterances = document.createElement('script')

    let theme = 'boxy-light'
    const savedTheme = localStorage.getItem('selected-theme')
    if (savedTheme !== null) {
      theme = savedTheme === 'dark' ? 'dark-blue' : 'boxy-light'
    }
    utterances.type = 'text/javascript'
    utterances.async = true
    utterances.crossorigin = 'anonymous'
    utterances.src = 'https://utteranc.es/client.js'

    utterances.setAttribute('issue-term', 'pathname')
    utterances.setAttribute('theme', theme)
    utterances.setAttribute('repo', `padosum/tir`)

    // script tag 삽입
    this.$refs.comment.appendChild(utterances)
  },
}
</script>

<style scoped></style>
