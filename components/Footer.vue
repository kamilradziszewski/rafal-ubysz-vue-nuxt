<template>
  <footer id="footer">
    <div class="grid-x">
      <div class="cell large-3 icon-map-column">
        <svg class="icon-map">
          <use xlink:href="~/assets/image/icons-sprite.svg#icon-map" />
        </svg>
      </div>

      <AddressCard v-for="address in loadedAddresses" :key="address.id" :address="address" />
    </div>
    <div class="dividing-line" />

    <p class="copyright">
      Copyright {{ currentYear }} Rafał Ubysz
    </p>
  </footer>
</template>

<script>
import AddressCard from '~/components/AddressCard'

export default {
  components: {
    AddressCard
  },
  data() {
    return {
      currentYear: (() => {
        const currentDate = new Date()
        return currentDate.getFullYear()
      })()
    }
  },
  computed: {
    loadedAddresses() {
      return this.$store.getters.loadedAddresses
    }
  }
}
</script>
