<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Create Product</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="product.name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-checkbox v-model="product.active" label="Active"></v-checkbox>
        </v-col>
        <v-col cols="12">
          <v-btn @click="createProduct" :disabled="!valid" color="primary">
            Create Product
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useProductsStore } from '@/store/productsStore'
import { useRouter } from 'vue-router'

const valid = ref(false)
const product = ref({
  name: '',
  active: false,
})

const nameRules = [
  (value) => !!value || 'Name is required',
  (value) =>
    /^[a-zA-Z\s]{3,}$/.test(value) ||
    'Name must contain only letters and have a minimum length of 3',
]

const productsStore = useProductsStore()
const router = useRouter()

const createProduct = () => {
  productsStore.createProduct(product.value)
  resetProduct()
  router.push('/products')
}

const resetProduct = () => {
  product.value = {
    name: '',
    active: '',
  }
}
</script>

<style scoped></style>
