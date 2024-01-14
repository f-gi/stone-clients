<template>
    <Menu></Menu>
  <v-card>
    <v-list-item>
      <v-list-item-title class="headline text-h6 mb-1">
        Add Products to {{ client.name }}
      </v-list-item-title>

      <v-list v-if="availableProducts.length">
        <v-list-item v-for="product in availableProducts" :key="product.id">
          <v-checkbox
            v-model="selectedProducts"
            :label="product.name"
            :value="product.id"
          ></v-checkbox>
        </v-list-item>
      </v-list>
      <v-alert v-else> No products available. </v-alert>

      <v-card-actions>
        <v-btn @click="save">Save</v-btn>
        <v-btn @click="cancel">Return</v-btn>
      </v-card-actions>
    </v-list-item>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useClientsStore } from '@/store/clientsStore'
import { useProductsStore } from '@/store/productsStore'
import { useRouter } from 'vue-router'
import Menu from '@/components/Menu.vue'

const clientsStore = useClientsStore()
const productsStore = useProductsStore()
const router = useRouter()

const selectedProducts = ref([])
const availableProducts = ref([])
const client = ref({})

const save = () => {
  if (client.value) {
    clientsStore.addProductsToClient(client.value.id, selectedProducts.value)
  }
}

const cancel = () => {
  router.push('/')
}

onMounted(() => {
  const routeClientId = router.currentRoute.value.params.id
  if (routeClientId) {
    const existingClient = clientsStore.clients.find(
      (c) => c.id === routeClientId,
    )
    if (existingClient) {
      client.value = { ...existingClient }
    }

    availableProducts.value = productsStore.products.filter(
      (product) => product.active,
    )

    const clientProducts = clientsStore.getClientProducts(client.value.id)
    selectedProducts.value = clientProducts
  }
})
</script>

<style scoped></style>
