<template>
  <div>
    <web-view
      :src="address"
    ></web-view>
  </div>
</template>

<script>
import store from './store'
export default {
  computed: {
    address () {
      return store.state.address
    }
  },
  onLoad (options) {

  }
}
</script>

<style scoped>

</style>
