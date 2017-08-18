<!-- tab  -->
<template>
  <ul class="tabbar">
    <li class="tabbar-item" v-for="(item, i) in items" :key="item.text" @click="handleItem(i, item)" :class="{'active': currentIndex === i}">
      {{item.text}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'tabBar',
    props: {
      index: {
        type: Number,
        default: 0
      },
      items: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        currentIndex: this.index
      }
    },
    watch: {
      index (val) {}
    },
    methods: {
      handleItem (i, item) {
        this.currentIndex = i
        this.$emit('change', i, item)
      }
    }
  }
</script>