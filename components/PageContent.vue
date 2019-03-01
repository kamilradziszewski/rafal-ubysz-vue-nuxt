<template>
  <article
    class="align-center grid-x grid-padding-x"
    :class="this.$route.name"
  >
    <section class="article-content small-11 medium-8 cell">
      <h1 class="article-h1">
        {{ page.title.rendered }}
      </h1>
      <div
        class="article-body"
        :class="page.slug"
        v-html="page.content.rendered"
      />
    </section>
  </article>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  }
}
</script>
