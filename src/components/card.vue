<template>
  <div class="project-card" v-if="item">
    <router-link :to="'/project/' + item.id">
      <div class="project-card_img"><img :src="item.picture" class="img-block"></div>
    </router-link>
    <div class="project-card_text flex between column">
      <div class="flex between">
        <span>{{item.title}}</span>
      </div>
      <progress-bar :percent="item.percent"></progress-bar>
      <div class="flex between">
        <span>已筹集金额:{{item.recent}}</span>
        <span>{{item.percent}}%</span>
      </div>
    </div>
  </div>
</template>

<script>
  import progressBar from './progress.vue'
  export default {
    components: {
      progressBar
    },
    props: {
      item: {}
    }
  }
</script>