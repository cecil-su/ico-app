<template>
  <div class="headbar">{{title}}</div>
</template>

<script>
  export default {
    name: 'headBar',
    props: {
      title: {
        type: String,
        default: '蕴奇ICO'
      }
    }
  }
</script>