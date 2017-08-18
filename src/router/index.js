import Vue from 'vue'
import Router from 'vue-router'
import route from './route.vue'
import home from './home.vue'
import project from './project/index.vue'
import news from './news/index.vue'
import user from './user/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: home},
    { 
      path: '/project',
      component: route,
      children: [
        {path: '', component: project},
        {path: ':id', component: require('./project/detail.vue')}
      ]
    },
    {path: '/news', component: news},
    {path: '/user', component: user, meta: {requireLogin: true}},
    {path: '/sign/up', component: require('./sign/up.vue')},
    {path: '/sign/in', component: require('./sign/in.vue')}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requireLogin) {
    next('/sign/in')
  } else {
    next()
  }
  // console.log(router.app)
})

export default router
