<template>
  <PageContent :page="page" />
</template>

<script>
import PageContent from '~/components/PageContent'

export default {
  components: {
    PageContent
  },
  computed: {
    page() {
      return this.$store.getters.loadedPages('home')
    }
  }
}
</script>
