<template>
  <v-card class="container">
    <v-list-item>
      <v-list-item-title class="headline text-h6 mb-1">
        {{ client.name }}
      </v-list-item-title>

      <p><strong>Document:</strong> {{ client.document }}</p>
      <p><strong>Phone:</strong> {{ client.phone }}</p>
      <p><strong>Email:</strong> {{ client.email }}</p>
      <p><strong>Active:</strong> {{ client.active }}</p>

      <v-card-actions class="flex-wrap">
        <v-switch
          :input-value="switchStatus"
          label="Active"
          v-model="switchStatus"
          @change="toggleClientStatus"
          class="ml-2"
          color="primary"
        />

        <div class="d-flex flex-wrap">
          <v-btn variant="outlined" @click="addProducts" class="mb-2 mb-md-0"
            >Add Products</v-btn
          >
          <v-btn variant="outlined" @click="editClient" class="mb-2 mb-md-0"
            >Edit</v-btn
          >
          <v-btn
            variant="outlined"
            @click="showDeleteModal = true"
            class="mb-2 mb-md-0"
            >Delete</v-btn
          >
        </div></v-card-actions
      >
    </v-list-item>
    <DeleteModal
      :showModal="showDeleteModal"
      dialogTitle="Confirm Delete"
      :dialogText="`Are you sure you want to delete the item ${client.name}?`"
      :clientName="client.name"
      @confirm="handleDeleteClient"
      @cancel="showDeleteModal = false"
    />
  </v-card>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import { useClientsStore } from '@/store/clientsStore'
import { useRouter } from 'vue-router'
import DeleteModal from '@/components/Modals/Confirm.vue'

const clientsStore = useClientsStore()
const router = useRouter()

const props = defineProps(['client'])
const showDeleteModal = ref(false)

const switchStatus = ref(props.client.active)

const editClient = () => {
  router.push(`/edit-client/${props.client.id}`)
}

const handleDeleteClient = () => {
  clientsStore.deleteClient(props.client.id)
  showDeleteModal.value = false
}

const toggleClientStatus = () => {
  clientsStore.toggleClientStatus(props.client.id)
}

const addProducts = () => {
  router.push(`/add-products/${props.client.id}`)
}

watch(
  () => props.client.active,
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
.flex-wrap {
  flex-wrap: wrap;
}

.flex-wrap button {
  margin-bottom: 10px;
}
</style>