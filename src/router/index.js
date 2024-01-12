/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ClientsList from '@/pages/ClientsList'
import NewClient from '@/pages/NewClient'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    { path: '/', component: ClientsList },
    { path: '/new-client', component: NewClient },

  ]
})

export default router
