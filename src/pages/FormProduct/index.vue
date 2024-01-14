<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>{{ isEditing ? 'Edit Product' : 'Create Product' }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="product.name"
            :rules="rules.name"
            label="Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-checkbox v-model="product.active" label="Active"></v-checkbox>
        </v-col>
        <v-col cols="12">
          <v-btn @click="saveProduct" :disabled="!valid" color="primary">
            {{ isEditing ? 'Update Product' : 'Create Product' }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProductsStore } from '@/store/productsStore'
import { useRouter } from 'vue-router'

const productsStore = useProductsStore()
const router = useRouter()
const isEditing = ref(false)

const valid = ref(false)
const product = ref({
  name: '',
  active: false,
})

const rules = {
  name: [
    (value) => !!value || 'Name is required',
    (value) =>
      /^.{3,}$/.test(value) ||
      'Name must contain only letters and have a minimum length of 3',
  ],
}

const saveProduct = () => {
  if (isEditing.value) {
    productsStore.updateProduct(product.value)
  } else {
    productsStore.createProduct(product.value)
  }
  resetProduct()
  router.push('/products')
}

const resetProduct = () => {
  product.value = {
    name: '',
    active: false,
  }
}

onMounted(() => {
  const routeProductId = router.currentRoute.value.params.id
  if (routeProductId) {
    const existingProduct = productsStore.products.find(
      (p) => p.id === routeProductId,
    )
    if (existingProduct) {
      product.value = { ...existingProduct }
      isEditing.value = true
    }
  }
})
</script>

<style scoped></style>
