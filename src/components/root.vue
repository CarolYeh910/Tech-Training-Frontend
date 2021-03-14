<template>
  <div class="root_container">

    <markdown>
    </markdown>

  </div>
</template>

<script>
import Markdown from './Markdown'

export default {
  name: 'root',

  components:{
    Markdown
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .root_container {
  }
</style>
