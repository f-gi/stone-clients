/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ClientsList from '@/pages/ClientsList'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    { path: '/', component: ClientsList },
  ]
})

export default router
