import Vue from 'vue'
import VueRouter from 'vue-router'   
import Home from '../views/Home.vue'
import Customer from '../views/Customer.vue'
import Product from '../views/Products.vue'
import reports from '../views/reports.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  {
    path: '/customers',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/reports',
    name: 'reports',
    component: reports
  },
  {
    path: '/products',
    name: 'Product',
    component: Product
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
