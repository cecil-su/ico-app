<template>
  <div class="project has-navbar">
    <head-bar></head-bar>
    <tab-bar :items="navs" @change="handleIndex"></tab-bar>
    <card v-for="(item, index) in items" :key="index" :item="item"></card>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import card from '../../components/card.vue'
  export default {
    components: {
      card
    },
    data () {
      return {
        search: '',
        navs: [{text: '全部', state: -1}, {text: '众筹中', state: 1}, {text: '未开始', state: 0}, {text: '已结束', state: 2}],
        items: [],
        total: 0
      }
    },
    mounted () {
      this.handleIndex(0, this.navs[0])
    },
    methods: {
      handleIndex (i, item) {
        this.currentIndex = i
        let form = {page: 1, page_size: 10}
        item.state !== undefined ? form.state = item.state : form.name = this.search
        this.$http.get('/api/index', {params: form}).then(res => {
          if (res.data.error == 0) {
            this.items = res.data.data.fund
            this.total = parseInt(res.data.total)
          }
        })
      }
    }
  }
</script>