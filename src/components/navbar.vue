<template>
  <div class="navbar">
    <router-link :to="item.path" v-for="item in items" :key="item.text" active-class="active" class="navbar-item">{{item.text}}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    data () {
      return {
        items: [
          {text: '首页', path: '/home'},
          {text: '项目库', path: '/project'},
          {text: '资讯', path: '/news'},
          {text: '我的', path: '/user'}
        ]
      }
    }
  }
</script>