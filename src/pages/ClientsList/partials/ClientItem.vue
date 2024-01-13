<template>
  <v-card>
    <v-list-item>
      <v-list-item-title class="headline text-h6 mb-1">
        {{ client.name }}
      </v-list-item-title>

      <p><strong>Document:</strong> {{ client.document }}</p>
      <p><strong>Phone:</strong> {{ client.phone }}</p>
      <p><strong>Email:</strong> {{ client.email }}</p>
      <p><strong>Active:</strong> {{ client.active }}</p>

      <v-card-actions>
        <v-switch
          :input-value="switchStatus"
          label="Active"
          v-model="switchStatus"
          @change="toggleClientStatus"
          class="ml-2"
          color="primary"
        />
        <v-btn variant="outlined" @click="editClient">Edit</v-btn>
        <v-btn variant="outlined" @click="showDeleteModal = true">Delete</v-btn>
      </v-card-actions>
    </v-list-item>
    <DeleteModal
      :showDeleteModal="showDeleteModal"
      :clientName="client.name"
      @confirm-delete="handleDeleteClient"
      @cancel-delete="showDeleteModal = false"
    />
  </v-card>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import { useClientsStore } from '@/store/clientsStore'
import { useRouter } from 'vue-router'
import DeleteModal from './DeleteModal.vue'

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

watch(
  () => props.client.active,
  (newValue) => {
    switchStatus.value = newValue
  },
)
</script>

<style scoped></style>
