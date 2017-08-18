<template>
  <div class="home has-navbar">
    <head-bar></head-bar>
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="item in banner" :key="item.id" :style="{background: 'url('+ item.picture +') no-repeat center center'}"></mt-swipe-item>
    </mt-swipe>
    <section class="home-title">推荐项目</section>
    <div class="flex between column">
      <div class="flex">{{recommend.title}}</div>
    </div>
    <section class="home-title">热门项目</section>
    <section>
      <card v-for="item in items" :item="item" :key="item.id"></card>
    </section>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import card from '../components/card.vue'
  export default {
    name: 'home',
    components: {
      card
    },
    data () {
      return {
        banner: [],
        recommend: {},
        items: []
      }
    },
    mounted () {
      this.$http.get('api/index').then(res => {
        if (res.data.error == 0) {
          this.banner = res.data.data.banner
        }
      })
      this.$http.get('api/index/recommend?page=1&page_size=1').then(res => {
        if (res.data.error == 0) {
          this.recommend = res.data.data.fund[0]
        }
      })
      this.$http.get('api/index/hot?page=1&page_size=6').then(res => {
        if (res.data.error == 0) {
          this.items = res.data.data.fund
        }
      })
    }
  }
</script>

<style lang="stylus">
  .home
    .mint-swipe
      height 150px
      &-item 
        background-size auto 100% !important
</style>