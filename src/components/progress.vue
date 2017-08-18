<template>
  <div class="progress">
    <div class="percent" :style="{width: percentWidth + '%'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'progressBar',
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    computed: {
      percentWidth () {
        return this.percent > 100 ? '100' : this.percent
      }
    }
  }
</script>