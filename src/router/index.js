/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ClientsList from '@/pages/ClientsList'
import NewClient from '@/pages/NewClient'
import ProductsList from '@/pages/ProductsList'
import NewProduct from '@/pages/NewProduct'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    { path: '/', component: ClientsList },
    { path: '/new-client', component: NewClient },
    { path: '/edit-client/:id', component: NewClient},
    { path: '/products', component: ProductsList },
    { path: '/new-product', component: NewProduct },
    { path: '/edit-product/:id', component: NewProduct}
  ]
})

export default router
