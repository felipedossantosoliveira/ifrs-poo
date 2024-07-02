import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerList from '../views/CustomerList.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/auth/LoginView.vue'
import CustomerCreate from '../views/CustomerCreate.vue'
import ProductList from '../views/ProductList.vue'
import ProductCreate from '../views/ProductCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/clientes',
      name: 'customers',
      component: CustomerList
    },
    {
      path: '/clientes/criar',
      name: 'customer-create',
      component: CustomerCreate
    },
    {
      path: '/produtos',
      name: 'products',
      component: ProductList
    },
    {
      path: '/produtos/criar',
      name: 'product-create',
      component: ProductCreate
    }
  ]
})

export default router
