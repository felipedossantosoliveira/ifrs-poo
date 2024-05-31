import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../views/Menu.vue'
import LoginView from '../views/auth/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: Produtos
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes
    }
  ]
})

export default router