/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ClientsList from '@/pages/ClientsList'
import FormClient from '@/pages/FormClient'
import ProductsList from '@/pages/ProductsList'
import FormProduct from '@/pages/FormProduct'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    { path: '/', component: ClientsList },
    { path: '/new-client', component: FormClient },
    { path: '/edit-client/:id', component: FormClient},
    { path: '/products', component: ProductsList },
    { path: '/new-product', component: FormProduct },
    { path: '/edit-product/:id', component: FormProduct}
  ]
})

export default router
