<template>
  <transition name="router-fade" mode="out-in">
    <div class="app">
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
  import navbar from './components/navbar.vue'
  export default {
    name: 'app',
  }
</script>

<style lang="stylus">
  @import './assets/stylus/app.styl';
  .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
</style>
