<template>
  <div class="cell small-12 medium-4 large-3">
    <div class="address-card">
      <h3 class="address-title">
        {{ address.title }}
      </h3>
      <p>{{ address.additional_info }}</p>
      <p>{{ address.street }}</p>
      <p />
      <p>
        <a class="address-telephone" href="tel:+48223355247">
          Tel. 22 33 55 247
        </a>
      </p>
      <a class="address-webpage" href="http://www.zakazny.pl" target="_blank">
        www.zakazny.pl
      </a>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    address: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
