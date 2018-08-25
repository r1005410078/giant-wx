<template>
  <div class="article">
    <div v-html="article"></div>
  </div>
</template>

<script>
import store from './store'
export default {
  data () {
    return {
      article: ''
    }
  },
  onLoad (options) {
    this.article = store.state.detail.replace(/img/g, "img style='max-width:100%'")
  }
}
</script>

<style>
.article {
  padding: 0 10px;
  margin-top: 15px;
}

</style>
