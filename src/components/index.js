import navbar from './navbar.vue'
import headbar from './headbar.vue'
import tabbar from './tab.vue'

const components = [
  navbar,
  headbar,
  tabbar
]

const install = (Vue, options) => {
  if (install.installed) return 

  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}