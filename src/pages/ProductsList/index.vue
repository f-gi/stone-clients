<template>
  <v-container>
    <h1>Product List</h1>
    <v-list>
      <ProductItem
        v-for="product in productList"
        :key="product.id"
        :product="product"
      />
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProductsStore } from '@/store/productsStore'
import ProductItem from './partials/ProductItem.vue'

const productsStore = useProductsStore()
const productList = ref(computed(() => productsStore.products))
</script>

<style scoped></style>
