<template>
  <v-card class="container">
    <v-list-item>
      <v-list-item-title class="headline text-h6 mb-1">
        {{ product.name }}
      </v-list-item-title>

      <p><strong>Status:</strong> {{ product.active }}</p>

      <v-card-actions>
        <v-switch
          :input-value="switchStatus"
          label="Active"
          v-model="switchStatus"
          @change="toggleProductStatus"
          class="ml-2"
          color="primary"
        />
        <v-btn variant="outlined" @click="editProduct">Edit</v-btn>
        <v-btn variant="outlined" @click="showDeleteModal = true">Delete</v-btn>
      </v-card-actions>
    </v-list-item>
    <DeleteModal
      :showModal="showDeleteModal"
      dialogTitle="Confirm Delete"
      :dialogText="`Are you sure you want to delete the item ${product.name}?`"
      @confirm="handleDeleteProduct"
      @cancel="showDeleteModal = false"
    />
  </v-card>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import { useProductsStore } from '@/store/productsStore'
import { useRouter } from 'vue-router'
import DeleteModal from '@/components/Modals/Confirm.vue'

const productsStore = useProductsStore()
const router = useRouter()

const props = defineProps(['product'])
const showDeleteModal = ref(false)

const switchStatus = ref(props.product.active)

const editProduct = () => {
  router.push(`/edit-product/${props.product.id}`)
}

const handleDeleteProduct = () => {
  productsStore.deleteProduct(props.product.id)
  showDeleteModal.value = false
}

const toggleProductStatus = () => {
  productsStore.toggleProductStatus(props.product.id)
}

watch(
  () => props.product.status,
  (newValue) => {
    switchStatus.value = newValue
  },
)
</script>

<style scoped>
.container {
  max-width: 650px;
  margin-bottom: 20px; 
  background-color: #f2f2f2; 
  padding: 15px; 
  border-radius: 8px;
}
</style>
