import Vue from 'vue'
import Router from 'vue-router'
import Main from './../components/Main.vue'
import Portfolio from './../components/Portfolio.vue'
import Item from './../components/Item.vue'
import Contact from './../components/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
