import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RegisterPage from '../components/pages/RegisterPage.vue'
import ToolDetailPage from '../components/pages/ToolDetailPage.vue'
import SchemasPage from '../components/pages/SchemasPage.vue'
import SchemaDetailPage from '../components/pages/SchemaDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/register/:toolName',
    name: 'ToolDetail',
    component: ToolDetailPage,
  },
  {
    path: '/schemas',
    name: 'Schemas',
    component: SchemasPage,
  },
  {
    path: '/schemas/:schemaId',
    name: 'SchemaDetail',
    component: SchemaDetailPage,
  },
]

const history = typeof window !== 'undefined'
  ? createWebHistory()
  : createMemoryHistory()

const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0 }
    }
  },
})

export default router
