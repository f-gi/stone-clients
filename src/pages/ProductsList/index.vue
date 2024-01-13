<template>
  <v-container>
    <h1>Product List</h1>
    <v-list>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useProductsStore } from '@/store/productsStore'
import ProductItem from './partials/ProductItem.vue'

const productsStore = useProductsStore()
const products = ref([])

watchEffect(() => {
  products.value = productsStore.products
})
</script>

<style scoped></style>
